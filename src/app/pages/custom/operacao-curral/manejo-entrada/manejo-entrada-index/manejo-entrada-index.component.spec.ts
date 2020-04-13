import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoEntradaIndexComponent } from './manejo-entrada-index.component';

describe('ManejoEntradaIndexComponent', () => {
  let component: ManejoEntradaIndexComponent;
  let fixture: ComponentFixture<ManejoEntradaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoEntradaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoEntradaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
