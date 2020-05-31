import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach-table',
  templateUrl: './coach-table.component.html',
  styleUrls: ['./coach-table.component.css']
})
export class CoachTableComponent implements OnInit {
  @Input() rows: any[];
  @Input() displayType: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  assignRanks(id) {
    if (this.displayType == "sessions") {
      this.router.navigate(['assign-ranks/', id])
    }
  }

}
