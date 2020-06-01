import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  sport = this.formBuilder.group({
    name: ['', Validators.required],
    rank: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private restService: RestService) { }

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
          name: ['', Validators.required],
          rank: ['', Validators.required],
        })])
      });
  }

  register(): void {
    let password = this.registrationForm.get('password').value;
    let confirmedPassword = this.registrationForm.get('confirmedPassword').value;

    if (password === confirmedPassword) {
      this.restService.registerUser(this.registrationForm.value).subscribe(res => console.log);
    }
  }

  get sportForms(): FormArray {
    return this.registrationForm.get('sports') as FormArray;
  }

  addSport(): void {
    this.sportForms.push(this.sport);
  }

  deleteSport(i: number): void {
    this.sportForms.removeAt(i);
  }
}