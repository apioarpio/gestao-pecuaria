import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoEntradaIndexListTableComponent } from './manejo-entrada-index-list-table.component';

describe('ManejoEntradaIndexListTableComponent', () => {
  let component: ManejoEntradaIndexListTableComponent;
  let fixture: ComponentFixture<ManejoEntradaIndexListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoEntradaIndexListTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoEntradaIndexListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
