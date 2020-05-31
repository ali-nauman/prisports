import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: any;
  adminItems: any;

  coachItems = [{
    title: "Dashboard",
    routerLink: "/coach/dashboard"
  }, {
    title: "Matches",
    routerLink: "/coach/matches"
  }, {
    title: "Practice Sessions",
    routerLink: "/coach/practiceSessions"
  }];

  playerItems = [{
    title: "Dashboard",
    routerLink: "/player/dashboard"
  }, {
    title: "Attendance",
    routerLink: "/player/attendance"
  }, {
    title: "Today's Schedule",
    routerLink: "/player/schedule"
  }, {
    title: "Practice Sessions",
    routerLink: "/player/practiceSessions"
  }, {
    title: "Matches",
    routerLink: "/player/matches"
  }]

  constructor() { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user.role == "Admin") {
      this.items = this.adminItems;
    }
    else if (user.role == "Coach") {
      this.items = this.coachItems;
    }
    else {
      this.items = this.playerItems;
    }
  }
}