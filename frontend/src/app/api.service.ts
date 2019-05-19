import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly API_ROOT: string = 'http://localhost:8080/api';
  readonly PAGE_NUMBER: string = 'page=';
  readonly PAGE_SIZE: string = 'size=';
  readonly SORT: string = 'sort=';

  constructor(private httpClient: HttpClient) {}

  getAll(
    url: string,
    page: number,
    size: number,
    sort?: string
  ): Observable<any> {
    return this.httpClient.get(
      this.API_ROOT +
        url +
        this.PAGE_NUMBER +
        page +
        '&' +
        this.PAGE_SIZE +
        size +
        (sort ? '&' + this.SORT + sort : '')
    );
  }

  post(url: string, object: Object): Observable<any> {
    return this.httpClient.post(this.API_ROOT + url, object);
  }

  patch(url: string, object: Object): Observable<any> {
    return this.httpClient.patch(this.API_ROOT + url, object);
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(this.API_ROOT + url);
  }

  login(headers: HttpHeaders): Observable<any> {
    return this.httpClient.post('http://localhost:8080/login', null, { headers: headers, withCredentials: true });
  }

  authenticate(): Observable<any> {
    return this.httpClient.post('http://localhost:8080/authentication', null, { withCredentials: true });
  }

  getAuthenticatedUser(): Observable<any> {
    return this.httpClient.get(this.API_ROOT + '/users/search/user', { withCredentials: true });
  }

  logout(): Observable<any> {
    console.log('LOGOUT');
    return this.httpClient.post('http://localhost:8080/logout', null, { withCredentials: true });
  }
}
