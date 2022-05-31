import { TestBed } from '@angular/core/testing';

import { MaitereService } from './maitere.service';

describe('MaitereService', () => {
  let service: MaitereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaitereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
