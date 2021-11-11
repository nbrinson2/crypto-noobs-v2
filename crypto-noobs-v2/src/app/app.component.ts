import { Component, HostListener, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  public mini = true;
  public scrollY?: number;
  public showFiller: boolean = true;
  public firstInstanceOfAllLettersArray?: string[];
  public showMainScreen = true;
  public showTrendingScreen = false;
  public showGlossaryScreen = false;

  @ViewChild('search-component') searchComponent: any;

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

  public toggleSidebar() {
    let mySidebar = document.getElementById("mySidebar");
    let main = document.getElementById("main");

    if (mySidebar && main) {
      if (this.mini) {
        mySidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        this.mini = false;
      } else {
        mySidebar.style.width = "85px";
        main.style.marginLeft = "85px";
        this.mini = true;
      }
    }
  }

  public search(value: string) {
    this.searchText = value;
  }

  public navigate(value: string) {
    window.scrollTo(0,0);
    if(value.includes('glossary')) {
      this.showMainScreen = false;
      this.showTrendingScreen = false;
      this.showGlossaryScreen = true;
    }
    else if (value.includes('home')) {
      this.showMainScreen = true;
      this.showTrendingScreen = false;
      this.showGlossaryScreen = false;
    }
    else if (value.includes('trending')) {
      this.showMainScreen = false;
      this.showTrendingScreen = true;
      this.showGlossaryScreen = false;
    }
  }
}
