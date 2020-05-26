import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.loginForm = this.formBuilder.group(
      {
        email: '',
        password: ''
      });
  }

  logIn() {
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;

    this.authService.logIn(email, password);
  }

  ngOnInit(): void {
  }
}