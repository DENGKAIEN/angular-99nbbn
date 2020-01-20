import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalresourcesComponent } from './physicalresources.component';

describe('PhysicalresourcesComponent', () => {
  let component: PhysicalresourcesComponent;
  let fixture: ComponentFixture<PhysicalresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
