import { Component, HostListener } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TerminologyService } from './services/terminology.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'crypto-noobs-v2';

  public events?: string[];
  public opened = true;
  public scrollY?: number;
  public showFiller: boolean = true;

  constructor(
    private store: AngularFirestore
  ) { }

  @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.scrollY = window.scrollY;
  }

  ngOnInit() {
    // window.addEventListener("scroll", this.scroll, true);

    // Get all collected data from firebase
    // this.store.collection('contact-us').snapshotChanges().subscribe((response) => {
    //   console.log('collection response', response);
    // });
  }



  public scroll() {
    const scrollPos = document.documentElement.scrollTop;

    // change '50' according to when you want to change the image
    if (scrollPos > 50) {
      console.log('New image');
    }
    else {
      console.log('Old Image');
    }
  }

}
