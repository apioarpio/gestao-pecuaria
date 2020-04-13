import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoEntradaCreateComponent } from './manejo-entrada-create.component';

describe('ManejoEntradaCreateComponent', () => {
  let component: ManejoEntradaCreateComponent;
  let fixture: ComponentFixture<ManejoEntradaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoEntradaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoEntradaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
