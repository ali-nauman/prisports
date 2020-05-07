import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = 'http://localhost:3000';
  authenticationToken: string = null;

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string) {
    this.http.post(`${this.baseUrl}/accounts/login`, { email: email, password: password }, { responseType: 'json', observe: 'body' })
      .subscribe(res => {
        let response = Object(res);
        this.authenticationToken = response.success ? response.token : null;
      });
  }
}
