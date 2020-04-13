import { TestBed } from '@angular/core/testing';

import { ManejoSaidaService } from './manejo-saida.service';

describe('ManejoSaidaService', () => {
  let service: ManejoSaidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoSaidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
