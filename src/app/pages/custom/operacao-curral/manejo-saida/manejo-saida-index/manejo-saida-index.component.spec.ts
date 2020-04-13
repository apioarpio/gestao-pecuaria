import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoSaidaIndexComponent } from './manejo-saida-index.component';

describe('ManejoSaidaIndexComponent', () => {
  let component: ManejoSaidaIndexComponent;
  let fixture: ComponentFixture<ManejoSaidaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoSaidaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoSaidaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
