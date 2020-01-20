import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersNumComponent } from './members-num.component';

describe('MembersNumComponent', () => {
  let component: MembersNumComponent;
  let fixture: ComponentFixture<MembersNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
