import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {
  @Input() rows: any;
  constructor() { }

  ngOnInit(): void {
  }

}
