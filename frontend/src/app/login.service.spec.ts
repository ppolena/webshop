import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ApiService],
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
