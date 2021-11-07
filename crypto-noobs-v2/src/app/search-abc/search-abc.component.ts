import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-abc',
  templateUrl: './search-abc.component.html',
  styleUrls: ['./search-abc.component.scss']
})
export class SearchAbcComponent implements OnInit {
  public scrollY?: number;
  public search = "";
  public elementList: any;
  public element: any;
  public elRect: any;
  public scrollTo?: number;

  @Output() sendSearchTermEvent = new EventEmitter<string>();

  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    let current = '';
    let firstInstanceArray = document.querySelectorAll(".first");

    this.addAndRemoveStickyHeader();

    // Add highlighted letters when scrolling
    firstInstanceArray.forEach((element: any) => {
      const elementTop = element.offsetTop;
      const elementHeight = element.clientHeight;
      if (window.scrollY > (elementTop - elementHeight - 600)) {
        current = element.getAttribute('id');
        this.addRemoveHighlight(current);
      }

    });

  }

  public addAndRemoveStickyHeader() {
    if (window.pageYOffset > 5) {
      let headerElement = document.getElementById("header");
      headerElement?.classList.add("sticky");
    } else {
      let headerElement = document.getElementById("header");
      headerElement?.classList.remove("sticky");
    }

  }

  public scroll(letter: any) {
    if (letter == 'num') {
      window.scrollTo({
        top: 0
      })
    } else {
      this.elementList = document.getElementsByClassName(letter);
      this.element = this.elementList[0];
      console.log(document.documentElement.scrollTop);

      if (this.element) {
        this.elRect = this.element.getBoundingClientRect();
        console.log(this.elRect.top);

        if (window.scrollY == 0) {
          this.scrollTo = this.elRect.top + document.documentElement.scrollTop - 300
        } else {
          this.scrollTo = this.elRect.top + document.documentElement.scrollTop - 170;
        }

        window.scroll({
          top: this.scrollTo
        })
      }
    }

    this.elementList = '';
    this.element = '';
    this.elRect = '';
    this.scrollTo = 0;
  }

  public addRemoveHighlight(currentElementId: string) {
    // Get all menu items from alphabet
    let menuItemArray = document.querySelectorAll(".menu-item");

    menuItemArray.forEach((element: any) => {
      element.childNodes[0].classList.remove("highlight");

      if (currentElementId[0].match(/\d+/g) != null) {
        // Highlight first menu item if number exists
        menuItemArray[0].children[0].classList.add("highlight");
      } else {
        if (element.childNodes[0].innerText.toLowerCase().includes(currentElementId[0]) || currentElementId[0].match(/\d+/g) != null) {

          // Highlight current letter
          element.childNodes[0].classList.add("highlight");
        }
      }
    });
  }

  public sendSearchTerm(value: string) {
    // console.log(value);
    this.sendSearchTermEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
