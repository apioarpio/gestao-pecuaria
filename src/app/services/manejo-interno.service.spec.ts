import { TestBed } from '@angular/core/testing';

import { ManejoInternoService } from './manejo-interno.service';

describe('ManejoInternoService', () => {
  let service: ManejoInternoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoInternoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
