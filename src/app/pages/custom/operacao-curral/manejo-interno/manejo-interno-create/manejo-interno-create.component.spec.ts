import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoInternoCreateComponent } from './manejo-interno-create.component';

describe('ManejoInternoCreateComponent', () => {
  let component: ManejoInternoCreateComponent;
  let fixture: ComponentFixture<ManejoInternoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoInternoCreateComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoInternoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
