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
  row: any;
  displaying: string;
  // roles = ['player', 'coach', 'admin'];

  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private restService: RestService
  ) {}

  ngOnInit(): void {
    this.updateUserForm = this.formBuilder.group({
      firstName: [this.row.firstName],
      lastName: [this.row.lastName],
      email: [this.row.emailAddress],
      phone: [this.row.phoneNumber],
      role: [this.row.role],
      // password: [this.row.password],
    });
  }

  updatePlayer(): void {
    this.restService.setPlayerData(this.row._id, this.updateUserForm.value.firstName, this.updateUserForm.value.lastName, 
      this.updateUserForm.value.email, this.updateUserForm.value.phone, this.updateUserForm.value.role).subscribe(this.modal.close);
  }
}
