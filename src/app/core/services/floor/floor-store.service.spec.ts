import { TestBed } from '@angular/core/testing';

import { FloorStoreService } from './floor-store.service';

describe('FloorStoreService', () => {
  let service: FloorStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloorStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
