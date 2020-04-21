import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSingComponent } from './footer-sing.component';

describe('FooterSingComponent', () => {
  let component: FooterSingComponent;
  let fixture: ComponentFixture<FooterSingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
