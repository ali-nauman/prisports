import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  sports = ['Tennis', 'Badminton', 'Table Tennis', 'Squash'];
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private restService: RestService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailAddress: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        password: ['', Validators.required],
        confirmedPassword: ['', Validators.required],
        sports: this.formBuilder.array([this.formBuilder.group({
          sportName: ['', Validators.required],
          sportRank: ['', Validators.required],
        })])
      })
  }

  register() {
    let password = this.registrationForm.get('password').value;
    let confirmedPassword = this.registrationForm.get('confirmedPassword').value;

    if (password == confirmedPassword) {
      this.restService.registerUser(this.registrationForm.value);
    }
  }

  get sportForms() {
    return this.registrationForm.get('sports') as FormArray;
  }

  addSport() {
    const sport = this.formBuilder.group({
      sportName: ['', Validators.required],
      sportRank: ['', Validators.required]
    })
    this.sportForms.push(sport);
  }

  deleteSport(i) {
    this.sportForms.removeAt(i);
  }
}
