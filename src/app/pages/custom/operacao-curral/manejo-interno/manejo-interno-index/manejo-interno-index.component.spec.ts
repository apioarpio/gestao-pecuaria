import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoInternoIndexComponent } from './manejo-interno-index.component';

describe('ManejoInternoIndexComponent', () => {
  let component: ManejoInternoIndexComponent;
  let fixture: ComponentFixture<ManejoInternoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoInternoIndexComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoInternoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
