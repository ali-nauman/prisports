import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayLogOutButton: boolean = false;
  displayDashboardLink: boolean = false;
  dashboardLink: string = "";

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.displayLogOutButton = this.authService.isUserLoggedIn();
    this.displayDashboardLink = this.displayLogOutButton;

    this.setDashboardLink();
  }

  setDashboardLink(): void {
    if (this.authService.isUserLoggedIn()) {
      let userRole = this.authService.getUserRole();

      if (userRole == 'Admin') { this.dashboardLink = '/admin/dashboard'; }
      else if (userRole == 'Coach') { this.dashboardLink = '/coach/dashboard'; }
      else { this.dashboardLink = '/player/dashboard'; }

      this.displayDashboardLink = true;
    }
  }

  logOut(): void {
    this.authService.logOut();
  }
}