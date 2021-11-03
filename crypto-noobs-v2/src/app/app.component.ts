import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'crypto-noobs-v2';

  public events: string[] = [];
  public opened = true;
  public mini = true;
  public scrollY: number | undefined;
  public showFiller: boolean = true;

  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.scrollY = window.scrollY;
    console.log(window.scrollY); // Value of scroll Y in px
  }

  ngOnInit() {
    window.addEventListener("scroll", this.scroll, true);
  }



  public scroll = () => {
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
    if (this.mini) {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      this.mini = false;
    } else {
      document.getElementById("mySidebar").style.width = "85px";
      document.getElementById("main").style.marginLeft = "85px";
      this.mini = true;
    }
  }




}
