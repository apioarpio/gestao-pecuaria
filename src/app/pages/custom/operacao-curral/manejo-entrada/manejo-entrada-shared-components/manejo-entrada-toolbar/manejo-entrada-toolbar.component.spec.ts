import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoEntradaToolbarComponent } from './manejo-entrada-toolbar.component';

describe('ManejoEntradaToolbarComponent', () => {
  let component: ManejoEntradaToolbarComponent;
  let fixture: ComponentFixture<ManejoEntradaToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoEntradaToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoEntradaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
