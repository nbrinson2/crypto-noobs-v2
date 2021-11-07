import { Component, Input, OnInit } from '@angular/core';
import { TerminologyService } from '../services/terminology.service';

@Component({
  selector: 'app-single-terminology',
  templateUrl: './single-terminology.component.html',
  styleUrls: ['./single-terminology.component.scss']
})
export class SingleTerminologyComponent implements OnInit {
  @Input() public term?: string;
  @Input() public definition?: string;

  constructor() {}

  ngOnInit(): void {
  }



}
