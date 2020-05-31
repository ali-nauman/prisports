import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {
  display: string = 'sessions';
  data: any;
  constructor(private restService: RestService) { }

  changeDisplay(display: string) {
    this.display = display;

    if (this.display == 'sessions') {
      this.restService.getPlayerPracticeSessions().subscribe(
        res => this.data = res,
        err => console.error(err));
    }
    else if (this.display == 'matches'){
      this.restService.getPlayerMatches().subscribe(
        res => this.data = res,
        err => console.error(err));
    }
    else if (this.display == 'attendance'){
      this.restService.getAttendance().subscribe(
        res => this.data = res,
        err => console.error(err));
    }
  }
  ngOnInit(): void {
    this.restService.getPracticeSessions().subscribe(
      res => this.data = res,
      err => console.error(err));
  }

}
