import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-admin-update-user',
  templateUrl: './admin-update-user.component.html',
  styleUrls: ['./admin-update-user.component.css'],
})
export class AdminUpdateUserComponent implements OnInit {
  updateUserForm: FormGroup;
  user: any;
  editing: string;

  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private restService: RestService
  ) { }

  ngOnInit(): void {
    this.updateUserForm = this.formBuilder.group({
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      emailAddress: [this.user.emailAddress],
      phoneNumber: [this.user.phoneNumber]
    });
  }

  updateUser(): void {
    if (this.editing == "players") {
      this.restService.setPlayer(this.user._id, this.updateUserForm.value).subscribe(this.modal.close);
    }
    else {
      this.restService.setCoach(this.user._id, this.updateUserForm.value).subscribe(this.modal.close);
    }
  }
}
