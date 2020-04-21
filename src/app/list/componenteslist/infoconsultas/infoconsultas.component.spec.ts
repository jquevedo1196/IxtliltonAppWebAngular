import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoconsultasComponent } from './infoconsultas.component';

describe('InfoconsultasComponent', () => {
  let component: InfoconsultasComponent;
  let fixture: ComponentFixture<InfoconsultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoconsultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoconsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
