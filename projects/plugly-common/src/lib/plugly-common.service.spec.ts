import { TestBed } from '@angular/core/testing';

import { PluglyCommonService } from './plugly-common.service';

describe('PluglyCommonService', () => {
  let service: PluglyCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluglyCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
