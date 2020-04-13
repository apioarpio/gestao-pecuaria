import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresColetaComponent } from './indicadores-coleta.component';

describe('IndicadoresColetaComponent', () => {
  let component: IndicadoresColetaComponent;
  let fixture: ComponentFixture<IndicadoresColetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicadoresColetaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadoresColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
