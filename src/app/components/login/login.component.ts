import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private restService: RestService) {
    this.loginForm = this.formBuilder.group(
      {
        email: '',
        password: ''
      });
   }

  login() {
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;

    this.restService.authenticate(email, password);
   }

  ngOnInit(): void {
  }
}