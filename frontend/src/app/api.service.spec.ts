import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiServiceService', () => {
  let service: ApiService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
