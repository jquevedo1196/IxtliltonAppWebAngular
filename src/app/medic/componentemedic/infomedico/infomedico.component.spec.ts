import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomedicoComponent } from './infomedico.component';

describe('InfomedicoComponent', () => {
  let component: InfomedicoComponent;
  let fixture: ComponentFixture<InfomedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
