import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColetaAnimalComponent } from './coleta-animal.component';

describe('TroncoComponent', () => {
  let component: ColetaAnimalComponent;
  let fixture: ComponentFixture<ColetaAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColetaAnimalComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColetaAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
