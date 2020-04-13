import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColetaAnimaisFormComponent } from './coleta-animais-form.component';

describe('ColetaAnimaisFormComponent', () => {
  let component: ColetaAnimaisFormComponent;
  let fixture: ComponentFixture<ColetaAnimaisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColetaAnimaisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColetaAnimaisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
