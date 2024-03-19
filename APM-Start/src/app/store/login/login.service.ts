import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class LoginService {
  private url = 'http://localhost:5192/User/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post(this.url, { username, password }, { responseType: 'text' });
  }
  
}
