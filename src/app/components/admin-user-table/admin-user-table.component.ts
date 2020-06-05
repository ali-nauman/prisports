import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminUpdateUserComponent } from '../admin-update-user/admin-update-user.component';
import { AdminCreateUserComponent } from "../admin-create-user/admin-create-user.component";

@Component({
  selector: 'app-admin-user-table',
  templateUrl: './admin-user-table.component.html',
  styleUrls: ['./admin-user-table.component.css'],
})
export class AdminUserTableComponent implements OnInit {
  @Input() displaying: string;
  @Input() users: any[];

  constructor(
    private restService: RestService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.populateTable();
  }

  populateTable(): void {
    if (this.displaying == "players") {
      this.restService.getPlayers().subscribe(res => this.users = res);
    }
    else {
      this.restService.getCoaches().subscribe(res => this.users = res);
    }
  }

  editUser(user: any): void {
    const ref = this.modalService.open(AdminUpdateUserComponent);
    ref.componentInstance.user = user;
    ref.componentInstance.editing = this.displaying;

    ref.result.then(onFulFilled => {
      this.populateTable();
    });
  }

  deleteUser(user: any): void {
    if (this.displaying == "players") {
      this.restService.deletePlayer(user._id).subscribe(res => this.users.splice(user._id, 1));
    }
    else {
      this.restService.deleteCoach(user._id).subscribe(res => this.users.splice(user._id, 1));
    }

    this.populateTable();
  }

  createUser(): void {
    const ref = this.modalService.open(AdminCreateUserComponent);
    ref.componentInstance.adding = this.displaying;

    ref.result.then(onFulFilled => {
      this.populateTable();
    });
  }
}
