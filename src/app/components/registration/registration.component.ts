import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private restService: RestService) {
    this.registrationForm = this.formBuilder.group(
      {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
   }

  ngOnInit(): void {
  }

  register() {
    
  }

}
