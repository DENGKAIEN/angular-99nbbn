import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMeansComponent } from './payment-means.component';

describe('PaymentMeansComponent', () => {
  let component: PaymentMeansComponent;
  let fixture: ComponentFixture<PaymentMeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
