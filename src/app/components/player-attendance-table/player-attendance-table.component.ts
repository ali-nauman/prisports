import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-player-attendance-table',
  templateUrl: './player-attendance-table.component.html',
  styleUrls: ['./player-attendance-table.component.css']
})
export class PlayerAttendanceTableComponent implements OnInit {
  attendanceRecords: any;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getAttendance().subscribe(
      res => this.attendanceRecords = res,
      err => console.error(err));
  }
}
