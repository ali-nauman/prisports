import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminUpdateUserComponent } from '../admin-update-user/admin-update-user.component';

@Component({
  selector: 'app-admin-user-table',
  templateUrl: './admin-user-table.component.html',
  styleUrls: ['./admin-user-table.component.css'],
})
export class AdminUserTableComponent implements OnInit {
  @Input() displaying: any;
  @Input() rows: any[];

  constructor(
    private restService: RestService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.populateTable();
  }

  populateTable(): void {
    if (this.displaying == "players") {
      this.restService.getPlayers().subscribe(res => this.rows = res);
    }
    else {
      this.restService.getCoaches().subscribe(res => this.rows = res);
    }
  }

  editPlayer(row: any): void{
    const ref = this.modalService.open(AdminUpdateUserComponent);
    ref.componentInstance.row = row;
    ref.componentInstance.displaying = this.displaying;

    ref.result.then(onFulFilled => {
      this.populateTable();
    });
  }

  deletePlayer(row: any): void{
   this.restService.deletePlayer(row._id).subscribe( res => this.rows.splice(row._id,1));
   this.populateTable();
  }

  createPlayer(): void{}
}
