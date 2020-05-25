import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-coach-dashboard',
  templateUrl: './coach-dashboard.component.html',
  styleUrls: ['./coach-dashboard.component.css']
})
export class CoachDashboardComponent implements OnInit {
  display: string = 'sessions';
  data: any;

  constructor(private restService: RestService) { }

  changeDisplay(display: string) {
    this.display = display;

    if (this.display == 'sessions') {
      this.restService.getPracticeSessions().subscribe(
        res => this.data = res,
        err => console.error(err));
    }
    else {
      this.restService.getMatches().subscribe(
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
