import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Output() navEvent = new EventEmitter();

  public isMini = true;
  public isMobile = true;

  constructor() {}

  ngOnInit(): void {}

  public onSidenavClose() {
    console.log('side nav');
  }

  public toggleSidebar(sidebarType: string) {
    let mobileSidebar = document.getElementById('mobileSidebar');
    let mySidebar = document.getElementById('mySidebar');
    let main = document.getElementById('main');
    let matNavList = document.getElementsByClassName('mat-nav-list-container')[0] as HTMLElement;
    let overlay = document.getElementsByClassName('overlay')[0] as HTMLElement;

    if (sidebarType.includes('full')) {
      if (mySidebar && main) {
        if (this.isMini) {
          mySidebar.style.width = '250px';
          main.style.marginLeft = '250px';
          this.isMini = false;
        } else {
          mySidebar.style.width = '85px';
          main.style.marginLeft = '85px';
          this.isMini = true;
        }
      }
    } else {
      if (mobileSidebar && main) {
        if (this.isMini) {
          matNavList.style.display = 'block';
          mobileSidebar.style.width = '100%';
          main.style.pointerEvents = 'none';
          main.style.marginLeft = '250px';
          main.classList.add('fixed-position');
          overlay.style.display = 'block';
          this.isMini = false;
        } else {
          matNavList.style.display = 'none';
          main.style.pointerEvents = 'all';
          mobileSidebar.style.width = '85px';
          main.style.marginLeft = '85px';
          main.classList.remove('fixed-position');
          overlay.style.display = 'none';
          this.isMini = true;
        }
      }
  
    }
  }
}
