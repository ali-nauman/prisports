import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-admin-user-table',
  templateUrl: './admin-user-table.component.html',
  styleUrls: ['./admin-user-table.component.css'],
})
export class AdminUserTableComponent implements OnInit {
  @Input() displaying: any;
  @Input() rows: any[];

  constructor(
    private restService: RestService
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

  editPlayer(): void{}

  deletePlayer(): void{}

  createPlayer(): void{}
}
