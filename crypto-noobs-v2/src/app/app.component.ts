import { Component, HostListener, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { TerminologyService } from './services/terminology.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'crypto-noobs-v2';
  public terms: any;
  public searchText?: string;

  public events?: string[];
  public opened = true;
  public scrollY?: number;
  public showFiller: boolean = true;
  public firstInstanceOfAllLettersArray?: string[];
  public showMainScreen = true;
  public showTrendingScreen = false;
  public showGlossaryScreen = false;

  // @ViewChild(NavComponent)
  // set nav(v: NavComponent) {
  //   setTimeout(() => {
  //     this.showMainScreen = v.showMainScreen;
  //     this.showTrendingScreen = v.showTrendingScreen;
  //     this.showGlossaryScreen = v.showGlossaryScreen;
  //   }, 0);
  // }

  constructor(
    public terminologyService: TerminologyService
  ) { }

  @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.scrollY = window.scrollY;
    // console.log(window.scrollY); // Value of scroll Y in px
  }

  ngOnInit() {
    // window.addEventListener("scroll", this.scroll, true);
    this.terms = this.terminologyService.getTerms();
    this.firstInstanceOfAllLettersArray = this.terminologyService.getFirstInstanceOfAllLetters();

    console.log(this.terminologyService.getFirstInstanceOfAllLetters());

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

  public search(value: string) {
    this.searchText = value;
  }

  public navigate(navTo: string) {
    window.scrollTo(0,0);
    if(navTo.includes('glossary')) {
      this.showMainScreen = false;
      this.showTrendingScreen = false;
      this.showGlossaryScreen = true;
    }
    else if (navTo.includes('home')) {
      this.showMainScreen = true;
      this.showTrendingScreen = false;
      this.showGlossaryScreen = false;
    }
    else if (navTo.includes('trending')) {
      this.showMainScreen = false;
      this.showTrendingScreen = true;
      this.showGlossaryScreen = false;
    }
  }
}
