import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string) {
    this.http.post(`${this.baseUrl}/accounts/login`, { email: email, password: password }).subscribe(r => { });
  }
}
