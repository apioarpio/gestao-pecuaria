import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaisColetadosListComponent } from './animais-coletados-list.component';

describe('AnimaisColetadosListComponent', () => {
  let component: AnimaisColetadosListComponent;
  let fixture: ComponentFixture<AnimaisColetadosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaisColetadosListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaisColetadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
