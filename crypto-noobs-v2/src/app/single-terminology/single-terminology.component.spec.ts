import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTerminologyComponent } from './single-terminology.component';

describe('SingleTerminologyComponent', () => {
  let component: SingleTerminologyComponent;
  let fixture: ComponentFixture<SingleTerminologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTerminologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTerminologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
