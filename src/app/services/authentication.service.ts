import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl: string = 'http://localhost:3000/accounts/';
  private isUserLoggedIn: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.isUserLoggedIn = new BehaviorSubject<boolean>(false);
  }

  logIn(emailAddress: string, password: string): any {
    this.http.post<any>(`${this.baseUrl}login`, { emailAddress: emailAddress, password: password }, { responseType: 'json', observe: 'body' }).subscribe(
      res => {
        if (res.success) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.setIsUserLoggedIn(true);
          if (res.user.role == "Admin") { this.router.navigate(['admin/dashboard']); }
          else if (res.user.role == "Coach") { this.router.navigate(['coach/dashboard']); }
          else { this.router.navigate(['player/dashboard']); }
        }
      }
    );
  }

  logOut() {
    this.http.get<any>(`${this.baseUrl}logout`).subscribe(res => console.log(res), err => console.error(err));
    localStorage.clear();
    this.setIsUserLoggedIn(false);
    this.router.navigate(['']);
  }

  setIsUserLoggedIn(isUserLoggedIn) {
    this.isUserLoggedIn.next(isUserLoggedIn);
  }

  getIsUserLoggedIn() {
    return this.isUserLoggedIn.asObservable();
  }
}
