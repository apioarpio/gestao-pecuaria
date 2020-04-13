import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoSaidaCreateComponent } from './manejo-saida-create.component';

describe('ManejoSaidaCreateComponent', () => {
  let component: ManejoSaidaCreateComponent;
  let fixture: ComponentFixture<ManejoSaidaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoSaidaCreateComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoSaidaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
