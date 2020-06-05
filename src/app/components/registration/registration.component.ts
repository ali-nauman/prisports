import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  sport: FormGroup = this.formBuilder.group({
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
        emailAddress: ['', [Validators.required, Validators.email]],
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
    if (this.password.value === this.confirmedPassword.value) {
      this.restService.registerUser(this.registrationForm.value).subscribe(res => console.log);
    }
  }

  get firstName(): AbstractControl { return this.registrationForm.get('firstName'); }
  get lastName(): AbstractControl { return this.registrationForm.get('lastName'); }
  get emailAddress(): AbstractControl { return this.registrationForm.get('emailAddress'); }
  get phoneNumber(): AbstractControl { return this.registrationForm.get('phoneNumber'); }
  get password(): AbstractControl { return this.registrationForm.get('password'); }
  get confirmedPassword(): AbstractControl { return this.registrationForm.get('confirmedPassword'); }
  get sports(): FormArray { return this.registrationForm.get('sports') as FormArray; }

  addSport(): void { this.sports.push(this.sport); }

  confirmedPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value == this.password.value) { return { 'confirmedPassword': true }; }
    return null;
  }

  deleteSport(i: number): void { this.sports.removeAt(i); }
}