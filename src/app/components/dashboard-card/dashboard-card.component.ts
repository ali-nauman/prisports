import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() title: string = "Card Title";
  @Input() text: string = "Card Text";
  @Input() buttonLink: string = "#";
  @Input() buttonText: string = "Card Button";

  constructor() { }

  ngOnInit(): void {
  }

}
