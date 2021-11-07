import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAbcComponent } from './search-abc.component';

describe('SearchAbcComponent', () => {
  let component: SearchAbcComponent;
  let fixture: ComponentFixture<SearchAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
