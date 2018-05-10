import { TestBed, inject } from '@angular/core/testing';

import { MarsRoverApiService } from './mars-rover-api.service';

describe('MarsRoverApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarsRoverApiService]
    });
  });

  it('should be created', inject([MarsRoverApiService], (service: MarsRoverApiService) => {
    expect(service).toBeTruthy();
  }));
});
