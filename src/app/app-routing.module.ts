import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PlayerDashboardComponent } from './components/player-dashboard/player-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CoachDashboardComponent } from './components/coach-dashboard/coach-dashboard.component';

// Add the paths for the components here
const routes: Routes = [
  { path: "admin/dashboard", component: AdminDashboardComponent },
  { path: "player/dashboard", component: PlayerDashboardComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component:RegistrationComponent },
  { path: "coach/dashboard", component:CoachDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
