import { TestBed } from '@angular/core/testing';

import { UrpgCalculatorService } from './urpg-calculator.service';

describe('UrpgCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrpgCalculatorService = TestBed.get(UrpgCalculatorService);
    expect(service).toBeTruthy();
  });
});
