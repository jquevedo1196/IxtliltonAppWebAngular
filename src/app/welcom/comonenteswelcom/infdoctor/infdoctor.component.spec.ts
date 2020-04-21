import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfdoctorComponent } from './infdoctor.component';

describe('InfdoctorComponent', () => {
  let component: InfdoctorComponent;
  let fixture: ComponentFixture<InfdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
