import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl: string = 'http://localhost:3000/accounts/';

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getUserRole(): string {
    let role: string = null;

    if (this.isUserLoggedIn()) {
      return JSON.parse(localStorage.getItem('user')).role;
    }

    return role;
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  logIn(emailAddress: string, password: string): void {
    this.http.post<any>(`${this.baseUrl}login`, { emailAddress: emailAddress, password: password }, { responseType: 'json', observe: 'body' }).subscribe(
      res => {
        if (res.success) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          if (res.user.role == "Admin") { this.router.navigate(['admin/dashboard']); }
          else if (res.user.role == "Coach") { this.router.navigate(['coach/dashboard']); }
          else { this.router.navigate(['player/dashboard']); }
        }
      }
    );
  }

  logOut(): void {
    this.http.get<any>(`${this.baseUrl}logout`).subscribe(res => { });
    localStorage.clear();
    this.router.navigate(['']);
  }
}
