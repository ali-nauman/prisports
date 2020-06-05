import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-player-matches',
  templateUrl: './player-matches.component.html',
  styleUrls: ['./player-matches.component.css']
})
export class PlayerMatchesComponent implements OnInit {
  matches: any;

  constructor(
    private authService: AuthenticationService,
    private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPlayerMatches()
      .subscribe(res => {
        this.matches = this.processRows(res);
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