import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayLogOutButton = false;
  dashboardLink: string = "";

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.displayLogOutButton = localStorage.getItem('user') != null;
  }

  logOut() {
    this.authService.logOut();
  }
}