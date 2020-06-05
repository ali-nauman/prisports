import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-player-practice-sessions',
  templateUrl: './player-practice-sessions.component.html',
  styleUrls: ['./player-practice-sessions.component.css']
})
export class PlayerPracticeSessionsComponent implements OnInit {
  practiceSessions: any;

  constructor(
    private authService: AuthenticationService,
    private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPlayerPracticeSessions()
      .subscribe(res => {
        this.practiceSessions = this.processRows(res);
      },
        err => console.error(err));
  }

  processRows(res: any): any[] {
    let userId = this.authService.getUserId();
    let opponent;
    let newRows = [];

    res.forEach(row => {
      if (row.playerAId._id == userId) {
        opponent = row.playerBId;
      }
      else {
        opponent = row.playerAId;
      }

      newRows.push({
        opponent: opponent,
        coach: row.coachId,
        court: row.courtId,
        startTime: row.startTime,
        endTime: row.endTime
      })
    });

    return newRows;
  }
}