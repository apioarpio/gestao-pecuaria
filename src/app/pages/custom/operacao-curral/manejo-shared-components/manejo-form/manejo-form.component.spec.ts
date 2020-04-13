import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoFormComponent } from './manejo-form.component';

describe('ManejoFormComponent', () => {
  let component: ManejoFormComponent;
  let fixture: ComponentFixture<ManejoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoFormComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
