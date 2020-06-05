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
import { PlayerPracticeSessionsComponent } from './components/player-practice-sessions/player-practice-sessions.component';
import { PlayerAttendanceComponent } from './components/player-attendance/player-attendance.component';
import { PlayerScheduleComponent } from './components/player-schedule/player-schedule.component';
import { AdminManageCoachesComponent } from './components/admin-manage-coaches/admin-manage-coaches.component';
import { AdminManagePlayersComponent } from './components/admin-manage-players/admin-manage-players.component';
import { AdminGenerateSchedulesComponent } from './components/admin-generate-schedules/admin-generate-schedules.component';
import { CoachGuard } from './services/coach.guard';
import { AdminGuard } from './services/admin.guard'

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
      component: AdminDashboardComponent,
      canActivate: [AdminGuard]
    }, {
      path: 'admin/manageCoaches',
      component: AdminManageCoachesComponent,
      canActivate: [AdminGuard]
    }, {
      path: 'admin/managePlayers',
      component: AdminManagePlayersComponent,
      canActivate: [AdminGuard]
    }, {
      path: 'admin/generateSchedules',
      component: AdminGenerateSchedulesComponent,
      canActivate: [AdminGuard]
    }, {
      path: 'coach/dashboard',
      component: CoachDashboardComponent,
      canActivate: [CoachGuard]
    }, {
      path: 'coach/matches',
      component: CoachMatchesComponent,
      canActivate: [CoachGuard]
    }, {
      path: 'coach/practiceSessions',
      component: CoachPracticeSessionsComponent,
      canActivate: [CoachGuard]
    }, {
      path: 'player/dashboard',
      component: PlayerDashboardComponent
    }, {
      path: 'player/matches',
      component: PlayerMatchesComponent
    }, {
      path: 'player/practiceSessions',
      component: PlayerPracticeSessionsComponent
    }, {
      path: 'player/attendance',
      component: PlayerAttendanceComponent
    }, {
      path: 'player/schedule',
      component: PlayerScheduleComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
