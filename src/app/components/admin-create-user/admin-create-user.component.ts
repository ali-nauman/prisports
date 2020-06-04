import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.css'],
})
export class AdminCreateUserComponent implements OnInit {
  displaying: string;
  registrationForm: FormGroup;
  sport = this.formBuilder.group({
    name: [''],
    rank: [''],
  });

  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private restService: RestService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      sports: this.formBuilder.array([
        this.formBuilder.group({
          name: [''],
          rank: [''],
        }),
      ]),
    });
  }

  register(): void {
      this.restService
        .registerUser(this.registrationForm.value)
        .subscribe(this.modal.close);
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
