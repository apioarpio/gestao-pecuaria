import { TestBed } from '@angular/core/testing';

import { ManejoEntradaServiceService } from './manejo-entrada-service.service';

describe('ManejoEntradaServiceService', () => {
  let service: ManejoEntradaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoEntradaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
