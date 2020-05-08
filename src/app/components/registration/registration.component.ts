import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  sports = ['Tennis', 'Badmintion', 'Table-tennis', 'Squash'];
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private restService: RestService) {   }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        sport1: '0',
        rank1: '0'
      });
  }

  register() {
    let firstname = this.registrationForm.get('firstName').value;
    let lastname = this.registrationForm.get('lastName').value;
    let email = this.registrationForm.get('email').value;
    let password = this.registrationForm.get('password').value;
    let sport1 = this.registrationForm.get('sport1').value;
    let rank1 = this.registrationForm.get('rank1').value;
    this.restService.registerUser(firstname, lastname, email, password, sport1, rank1);
    // console.log(firstname, lastname, mail, pswrd, sport1,rank1);
  }
}
