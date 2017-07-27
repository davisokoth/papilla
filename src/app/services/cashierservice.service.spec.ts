import { TestBed, inject } from '@angular/core/testing';

import { CashierserviceService } from './cashierservice.service';

describe('CashierserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashierserviceService]
    });
  });

  it('should be created', inject([CashierserviceService], (service: CashierserviceService) => {
    expect(service).toBeTruthy();
  }));
});
