import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoEntradaEditComponent } from './manejo-entrada-edit.component';

describe('ManejoEntradaEditComponent', () => {
  let component: ManejoEntradaEditComponent;
  let fixture: ComponentFixture<ManejoEntradaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoEntradaEditComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoEntradaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
