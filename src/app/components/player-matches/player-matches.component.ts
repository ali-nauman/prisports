import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-player-matches',
  templateUrl: './player-matches.component.html',
  styleUrls: ['./player-matches.component.css']
})
export class PlayerMatchesComponent implements OnInit {
  data: any;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPlayerMatches().subscribe(
      res => this.data = res,
      err => console.error(err));
  }

}
