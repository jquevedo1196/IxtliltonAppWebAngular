import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDeRegistroComponent } from './datos-de-registro.component';

describe('DatosDeRegistroComponent', () => {
  let component: DatosDeRegistroComponent;
  let fixture: ComponentFixture<DatosDeRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosDeRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDeRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
