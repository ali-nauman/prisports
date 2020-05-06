import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = 'http://localhost:3000';
  authenticationToken: string;

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string) /*: Observable<boolean>*/ {
    this.http.post(
      `${this.baseUrl}/accounts/login`,
      { email: email, password: password },
      { responseType: 'json', observe: 'body' })
      .subscribe(response => {
        console.log(response);
        // this.authenticationToken = response.success ? response.token : null;
        // return response.success;
      });
  }
}
