import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private restService: RestService, private router: Router) {
    this.loginForm = this.formBuilder.group(
      {
        email: '',
        password: ''
      });
  }

  login() {
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;

    this.restService.authenticate(email, password).subscribe(
      res => {
        if (res.success) {
          localStorage.setItem('token', res.token);
          if (res.role == "Admin") { this.router.navigate(['admin/dashboard']); }
          else if (res.role == "Coach") { this.router.navigate(['coach/dashboard']); }
          else { this.router.navigate(['player/dashboard']); }
        }
      },
      err => console.error(err));
  }

  ngOnInit(): void {
  }
}