import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-coach-practice-sessions',
  templateUrl: './coach-practice-sessions.component.html',
  styleUrls: ['./coach-practice-sessions.component.css']
})
export class CoachPracticeSessionsComponent implements OnInit {
  data: any;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPracticeSessions().subscribe(
      res => this.data = res,
      err => console.error(err));
  }
}