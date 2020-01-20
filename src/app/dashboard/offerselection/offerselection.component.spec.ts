import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferselectionComponent } from './offerselection.component';

describe('OfferselectionComponent', () => {
  let component: OfferselectionComponent;
  let fixture: ComponentFixture<OfferselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
