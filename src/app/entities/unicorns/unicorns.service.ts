import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  private resourceUrl = AppConstants.API_BASE_URL;
  private resourceID = AppConstants.API_ID;

  constructor(private http: HttpClient) {}

  queryUnicorns(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(
      this.resourceUrl + '/' + this.resourceID + '/unicors',
      { observe: 'response' }
    );
  }

  getUnicorn(id: string): Observable<HttpResponse<any>> {
    return this.http.get<any[]>(
      this.resourceUrl + '/' + this.resourceID + '/unicors/' + id,
      { observe: 'response' }
    );
  }

  // postUnicorn(unicorn: any): Observable<HttpResponse<any>> {
  //   let httpHeaders = new Headers({
  //     'Content-Type': 'application/json',
  //   });

  //   return this.http.post<any>(
  //     this.resourceUrl + '/' + this.resourceID + '/unicors',
  //     unicorn,
  //     { headers: httpHeaders, observe: 'response' }
  //   );
  // }

  // putUnicorn(unicorn: any, id: string): Observable<HttpResponse<any>> {
  //   let httpHeaders = new Headers({
  //     'Content-Type': 'application/json',
  //   });

  //   return this.http.put<any>(
  //     this.resourceUrl + '/' + this.resourceID + '/unicors/' + id,
  //     unicorn,
  //     { headers: httpHeaders, observe: 'response' }
  //   );
  // }
}
