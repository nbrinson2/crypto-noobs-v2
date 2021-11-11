import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CoingeckoServiceService } from '../services/coingecko-service.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  public coins: any;
  public coinSymbol = 'ENS';

  // Responsive
  public breakpoint: any;

  // Hover
  public isGradientVisible = false;
  public gradientTop?: number;
  public gradientLeft?: number;
  public gradientRadius?: number;
  public elementMouseIsOver?: any;
  public e?: any;

  constructor(
    private coinGeckoService: CoingeckoServiceService,

    // Hover
    private element: ElementRef<HTMLElement>
  ) { }

  ngOnInit(): void {
    this.getTrending();
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
  }

  public coinIdentity(_index: any, coin: any) {
    // console.log(coin.item.symbol);
    return coin.item.symbol;
  }

  public getTrending() {
    this.coinGeckoService.getTrending().subscribe((trendingResult: any) => {
      console.log(trendingResult);
      this.getCoinInfo(trendingResult.coins[0].item.id);
      this.coins = trendingResult.coins;
    });
  }

  public getCoinInfo(id: string) {
    this.coinGeckoService.getCoinInfo(id).subscribe((coin: any) => {
      // console.log(coin);
    });
  }

  // Responsive
  public onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }



  // Hover
  @ViewChildren('coins') coinList?: QueryList<any>;

  ngAfterViewInit() {
    this.coinList?.changes.subscribe((coin: any) => {
      this.ngForRendered(coin);
    })
  }

  public ngForRendered(coin: any) {
    // Set gradient radius to div width
    this.gradientRadius = coin._results[0].nativeElement.children[0].children[0].getBoundingClientRect().width;
    this.e = coin._results[0].nativeElement.children[0];
    console.log(coin._results[0].nativeElement.children[0]);
    console.log(coin._results[0]);
  }

  public onMouseOver() {
    this.isGradientVisible = true;
  }

  public onMouseOut() {
    this.isGradientVisible = false;
  }

  // @HostListener('mousemove', ['$event'])
  public onMouseMove(event: MouseEvent) {
    let x = event.clientX;
    let y = event.clientY;
    this.elementMouseIsOver = document.elementFromPoint(x,y) as HTMLElement;
    // console.log(this.elementMouseIsOver);

    this.gradientLeft = event.pageX - this.element.nativeElement.offsetLeft;
    this.gradientTop = event.pageY - this.element.nativeElement.offsetTop;
  }

  public gradientStyle(coin: any) {
    const top = this.gradientTop;
    const left = this.gradientLeft;
    const gradientRadius = this.isGradientVisible ? this.gradientRadius : 0;

    // console.log(coin.item.symbol);

    return {
      'height.px': gradientRadius,
      'width.px': gradientRadius,
      'top.px': top,
      'left.px': left
    };
  }



}