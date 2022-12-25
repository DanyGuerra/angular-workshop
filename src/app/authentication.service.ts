import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  fakeUser: string = 'daniel';
  fakePass: string = 'password';

  constructor() {}

  login(username: string, password: string): Observable<any> {
    if (username == this.fakeUser && password == this.fakePass) {
      localStorage.setItem('token', 'mi-token');
      return of('ok');
    } else {
      return throwError(() => new Error('error'));
    }
  }

  logout(): void {
    console.log('remove token');
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}
