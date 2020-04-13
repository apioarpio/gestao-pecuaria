import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposAnimaisColetadosComponent } from './tipos-animais-coletados.component';

describe('TiposAnimaisColetadosComponent', () => {
  let component: TiposAnimaisColetadosComponent;
  let fixture: ComponentFixture<TiposAnimaisColetadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposAnimaisColetadosComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposAnimaisColetadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
