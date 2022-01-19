import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() navEvent = new EventEmitter();
  
  public mini = true;

  constructor() { }

  ngOnInit(): void {
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


}
