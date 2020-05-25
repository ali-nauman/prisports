import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  authenticate(emailAddress: string, password: string): any {
    return this.http.post(`${this.baseUrl}/accounts/login`, { emailAddress: emailAddress, password: password }, { responseType: 'json', observe: 'body' })
  }

  registerUser(firstName: string, lastName: string, emailAddress: string, phoneNumber: string, password: string, sport1: string, rank1: string): any {
    return this.http.post<any>(`${this.baseUrl}/accounts/register`, {
      firstName: firstName, lastName: lastName, emailAddress: emailAddress, phoneNumber: phoneNumber, password: password,
      sport1: sport1, rank1: rank1
    }, { responseType: 'json', observe: 'body' });
  }

  getMatches() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get<any>(`${this.baseUrl}/coaches/matches`, httpOptions);
  }

  getPracticeSessions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get<any>(`${this.baseUrl}/coaches/practiceSessions`, httpOptions);
  }
}