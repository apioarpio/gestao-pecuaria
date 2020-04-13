import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoSaidaIndexListTableComponent } from './manejo-saida-index-list-table.component';

describe('ManejoSaidaIndexListTableComponent', () => {
  let component: ManejoSaidaIndexListTableComponent;
  let fixture: ComponentFixture<ManejoSaidaIndexListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoSaidaIndexListTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoSaidaIndexListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
