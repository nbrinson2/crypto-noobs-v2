import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay, map, mapTo, repeat, share, switchMap, merge, takeUntil } from 'rxjs/operators';
import { CoinProfileOverlayRef } from './coin-profile-overlay-ref';
import { COIN_PROFILE_DIALOG_DATA } from './coin-profile-overlay.tokens';
import { CoinGeckoCoin } from '../types/coin.types';

@Component({
  selector: 'app-coin-profile',
  templateUrl: './coin-profile.component.html',
  styleUrls: ['./coin-profile.component.scss']
})
export class CoinProfileComponent implements OnInit {
  public height: any;
  public width: any;
  public backgroundImage: any;
  public mouseX = 0;
  public mouseY = 0;

  get mousePX() {
    return this.mouseX / this.width;
  }
  get mousePY() {
    return this.mouseY / this.height;
  }

  @Input() cardBgImage: string = '';
  @ViewChild('card', { static: true }) card?: ElementRef;
  cardStyling = this.cardStyle();

  cardStyle() {
    return this.transformStyle();
  }

  cardBgTransform() {

    return this.transformStyle();
  }

  private transformStyle() {
    const tX = this.mousePX * -30;
    const tY = this.mousePY * -30;
    return { transform: `rotateY(${tX}deg) rotateX(${tY}deg)` };
  }
  get nativeElement(): HTMLElement {
    return this.card?.nativeElement;
  }
  constructor(
    private dialogRef: CoinProfileOverlayRef,
    @Inject(COIN_PROFILE_DIALOG_DATA) public coin: CoinGeckoCoin
  ) { }

  ngOnInit() {
    const mouseMove$ = fromEvent<MouseEvent>(this.card?.nativeElement, 'mousemove');
    const mouseLeave$ = fromEvent<MouseEvent>(this.card?.nativeElement, 'mouseleave').pipe(
      delay(100),
      mapTo(({ mouseX: 0, mouseY: 0 })),
      share()
    )
    const mouseEnter$ = fromEvent<MouseEvent>(this.card?.nativeElement, 'mouseenter').pipe(takeUntil(mouseLeave$))

    mouseEnter$.pipe(
      switchMap(() => mouseMove$),
      map(e => ({ mouseX: e.pageX - this.nativeElement.offsetLeft - this.width / 2, mouseY: e.pageY - this.nativeElement.offsetTop - this.height / 2 }))
      , merge(mouseLeave$), repeat()
    ).subscribe((e: any) => {
      this.mouseX = e.mouseX;
      this.mouseY = e.mouseY;
    })

    console.log(this.coin);
  }

  ngAfterViewInit() {
    this.width = this.card?.nativeElement.offsetWidth;
    this.height = this.card?.nativeElement.offsetHeight;
  }
}
