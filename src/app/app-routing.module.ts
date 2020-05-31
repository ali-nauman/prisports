import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PlayerDashboardComponent } from './components/player-dashboard/player-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CoachDashboardComponent } from './components/coach-dashboard/coach-dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { CoachMatchesComponent } from './components/coach-matches/coach-matches.component';
import { CoachPracticeSessionsComponent } from './components/coach-practice-sessions/coach-practice-sessions.component';
import { PlayerMatchesComponent } from './components/player-matches/player-matches.component';

const routes: Routes = [
  {
    path: '',
    component: FullwidthComponent,
    children: [{
      path: '',
      component: HomeComponent
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'register',
      component: RegistrationComponent
    }]
  }, {
    path: '',
    component: DefaultComponent,
    children: [{
      path: 'admin/dashboard',
      component: AdminDashboardComponent
    }, {
      path: 'coach/dashboard',
      component: CoachDashboardComponent
    }, {
      path: 'coach/matches',
      component: CoachMatchesComponent
    }, {
      path: 'coach/practiceSessions',
      component: CoachPracticeSessionsComponent
    }, {
      path: 'player/dashboard',
      component: PlayerDashboardComponent
    }, {
      path: 'player/matches',
      component: PlayerMatchesComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
