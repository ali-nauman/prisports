import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, OnChanges {
  displayLogOutButton = false;
  dashboardLink: string = "";

  constructor(private authService: AuthenticationService) {
    this.authService.getIsUserLoggedIn().subscribe(
      val => this.displayLogOutButton = val
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logOut();
  }
}