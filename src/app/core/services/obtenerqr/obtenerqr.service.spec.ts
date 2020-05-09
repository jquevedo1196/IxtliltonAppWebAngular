import {TestBed} from '@angular/core/testing';

import {ObtenerqrService} from './obtenerqr.service';

describe('ObtenerqrService', () => {
  let service: ObtenerqrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerqrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
