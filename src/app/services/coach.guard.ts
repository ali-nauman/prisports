import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CoachGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let userRole = this.authService.getUserRole();

    if (userRole == "Coach") { return true; }
    else if (userRole == "Admin") { this.router.navigate(['/admin/dashboard']); }
    else if (userRole == "Player") { this.router.navigate(['player/dashboard']); }
    else { this.router.navigate(['/login']); }

    return false;
  }
}