import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-player-practice-sessions',
  templateUrl: './player-practice-sessions.component.html',
  styleUrls: ['./player-practice-sessions.component.css']
})
export class PlayerPracticeSessionsComponent implements OnInit {
  data: any;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPlayerPracticeSessions().subscribe(
      res => this.data = res,
      err => console.error(err));
  }
}