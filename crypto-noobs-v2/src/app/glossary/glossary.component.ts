import { Component, OnInit } from '@angular/core';
import { TerminologyService } from '../services/terminology.service';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit {
  public terms: any;
  public searchText?: string;
  public firstInstanceOfAllLettersArray?: string[];

  constructor(
    public terminologyService: TerminologyService,

  ) { }

  ngOnInit() {
    this.terms = this.terminologyService.getTerms();
    this.firstInstanceOfAllLettersArray = this.terminologyService.getFirstInstanceOfAllLetters();

    console.log(this.terminologyService.getFirstInstanceOfAllLetters());
  }

  public search(value: string) {
    this.searchText = value;
  }

}
