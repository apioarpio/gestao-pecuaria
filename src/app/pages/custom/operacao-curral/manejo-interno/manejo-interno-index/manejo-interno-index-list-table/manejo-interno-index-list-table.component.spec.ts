import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoInternoIndexListTableComponent } from './manejo-interno-index-list-table.component';

describe('ManejoInternoIndexListTableComponent', () => {
  let component: ManejoInternoIndexListTableComponent;
  let fixture: ComponentFixture<ManejoInternoIndexListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoInternoIndexListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoInternoIndexListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
