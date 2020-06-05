import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let userRole = this.authService.getUserRole();

    if (userRole == "Player") { return true; }
    else if (userRole == "Admin") { this.router.navigate(['/admin/dashboard']); }
    else if (userRole == "Coach") { this.router.navigate(['coach/dashboard']); }
    else { this.router.navigate(['/login']); }

    return false;
  }

}
