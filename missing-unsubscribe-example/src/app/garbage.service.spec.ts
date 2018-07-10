import { TestBed, inject } from '@angular/core/testing';

import { GarbageService } from './garbage.service';

describe('GarbageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GarbageService]
    });
  });

  it('should be created', inject(
    [GarbageService],
    (service: GarbageService) => {
      expect(service).toBeTruthy();
    }
  ));
});
