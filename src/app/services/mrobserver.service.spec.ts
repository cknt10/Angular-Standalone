import { TestBed } from '@angular/core/testing';

import { MrobserverService } from './mrobserver.service';

describe('MrobserverService', () => {
  let service: MrobserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MrobserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
