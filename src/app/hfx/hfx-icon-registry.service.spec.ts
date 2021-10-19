import { TestBed } from '@angular/core/testing';

import { HfxIconRegistryService } from './hfx-icon-registry.service';

describe('HfxIconRegistryService', () => {
  let service: HfxIconRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HfxIconRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
