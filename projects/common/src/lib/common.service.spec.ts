import { TestBed } from '@angular/core/testing';

import { PluggularCommonService } from './common.service';

describe('PluggularCommonService', () => {
  let service: PluggularCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluggularCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
