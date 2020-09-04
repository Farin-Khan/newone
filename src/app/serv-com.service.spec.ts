import { TestBed } from '@angular/core/testing';

import { ServComService } from './serv-com.service';

describe('ServComService', () => {
  let service: ServComService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServComService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
