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

  constructor(private formBuilder: FormBuilder, private restService: RestService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        password: '',
        confirmedPassword: '',
        sport1: '',
        rank1: ''
      });
  }

  register() {
    let firstname = this.registrationForm.get('firstName').value;
    let lastname = this.registrationForm.get('lastName').value;
    let emailAddress = this.registrationForm.get('emailAddress').value;
    let phoneNumber = this.registrationForm.get('phoneNumber').value;
    let password = this.registrationForm.get('password').value;
    let confirmedPassword = this.registrationForm.get('confirmedPassword').value;
    let sport1 = this.registrationForm.get('sport1').value;
    let rank1 = this.registrationForm.get('rank1').value;

    if (password == confirmedPassword) {
      this.restService.registerUser(firstname, lastname, emailAddress, phoneNumber, password, sport1, rank1);
    }
  }
}
