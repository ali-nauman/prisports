import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coach-table',
  templateUrl: './coach-table.component.html',
  styleUrls: ['./coach-table.component.css']
})
export class CoachTableComponent implements OnInit {
  @Input() rows: any;

  constructor() { }

  ngOnInit(): void {
  }

}
