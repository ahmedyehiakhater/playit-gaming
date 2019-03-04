import { TestBed, inject } from '@angular/core/testing';

import { CookieHandlerService } from './cookie-handler.service';

describe('CookieHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieHandlerService]
    });
  });

  it('should be created', inject([CookieHandlerService], (service: CookieHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
