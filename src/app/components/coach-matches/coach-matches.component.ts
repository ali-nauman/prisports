import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-coach-matches',
  templateUrl: './coach-matches.component.html',
  styleUrls: ['./coach-matches.component.css']
})
export class CoachMatchesComponent implements OnInit {
  data: any;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getMatches().subscribe(
      res => this.data = res,
      err => console.error(err));
  }
}