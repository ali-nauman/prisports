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
  adding: string;
  userDetailsForm: FormGroup;
  sport = this.formBuilder.group({
    name: [''],
    rank: [''],
  });

  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private restService: RestService
  ) { }

  ngOnInit(): void {
    if (this.adding == "players") {
      this.userDetailsForm = this.formBuilder.group({
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
    else {
      this.userDetailsForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailAddress: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  }

  register(): void {
    if (this.adding == "players") {
      this.restService.registerUser(this.userDetailsForm.value).subscribe(this.modal.close);
    }
    else {
      this.restService.addCoach(this.userDetailsForm.value).subscribe(this.modal.close);
    }
  }

  get sportForms(): FormArray {
    return this.userDetailsForm.get('sports') as FormArray;
  }

  addSport(): void {
    this.sportForms.push(this.sport);
  }

  deleteSport(i: number): void {
    this.sportForms.removeAt(i);
  }
}
