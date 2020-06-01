import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: any;
  adminItems = [{
    title: "Dashboard",
    routerLink: "/admin/dashboard"
  }, {
    title: "Coaches",
    routerLink: "/admin/manageCoaches"
  }, {
    title: "Players",
    routerLink: "/admin/managePlayers"
  }, {
    title: "Schedules",
    routerLink: "/admin/generateSchedules"
  }];

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

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.setSideBarItems();
  }

  setSideBarItems() {
    let userRole = this.authService.getUserRole();

    if (userRole == "Admin") { this.items = this.adminItems; }
    else if (userRole == "Coach") { this.items = this.coachItems; }
    else { this.items = this.playerItems; }
  }
}