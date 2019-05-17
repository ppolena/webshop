import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
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
        (sort ? '&' + this.SORT + sort : ''),
      this.httpOptions
    );
  }

  post(url: string, object: Object): Observable<any> {
    return this.httpClient.post(this.API_ROOT + url, object, this.httpOptions);
  }

  patch(url: string, object: Object): Observable<any> {
    return this.httpClient.patch(this.API_ROOT + url, object, this.httpOptions);
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(this.API_ROOT + url, this.httpOptions);
  }
}
