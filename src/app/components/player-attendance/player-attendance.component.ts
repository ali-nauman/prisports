import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-player-attendance',
  templateUrl: './player-attendance.component.html',
  styleUrls: ['./player-attendance.component.css']
})
export class PlayerAttendanceComponent implements OnInit {
  data: any;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getAttendance().subscribe(
      res => this.data = res,
      err => console.error(err));
  }

}
