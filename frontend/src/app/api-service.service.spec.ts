import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ApiServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let backend: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ApiServiceService],
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);
    expect(service).toBeTruthy();
  });
});
