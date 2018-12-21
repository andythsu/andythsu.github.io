/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DaycounterService } from './daycounter.service';

describe('Service: DayCounter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DayCounterService]
    });
  });

  it('should ...', inject([DayCounterService], (service: DayCounterService) => {
    expect(service).toBeTruthy();
  }));
});
