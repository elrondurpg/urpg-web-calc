import { TestBed } from '@angular/core/testing';

import { UrpgServerService } from './urpg-server.service';

describe('UrpgServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrpgServerService = TestBed.get(UrpgServerService);
    expect(service).toBeTruthy();
  });
});
