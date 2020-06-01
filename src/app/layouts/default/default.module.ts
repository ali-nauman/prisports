import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { AdminDashboardComponent } from 'src/app/components/admin-dashboard/admin-dashboard.component';
import { CoachDashboardComponent } from 'src/app/components/coach-dashboard/coach-dashboard.component';
import { PlayerDashboardComponent } from 'src/app/components/player-dashboard/player-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoachTableComponent } from 'src/app/components/coach-table/coach-table.component';
import { CoachMatchesComponent } from 'src/app/components/coach-matches/coach-matches.component';
import { CoachPracticeSessionsComponent } from 'src/app/components/coach-practice-sessions/coach-practice-sessions.component';
import { PlayerTableComponent } from 'src/app/components/player-table/player-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlayerMatchesComponent } from 'src/app/components/player-matches/player-matches.component';
import { PlayerPracticeSessionsComponent } from 'src/app/components/player-practice-sessions/player-practice-sessions.component';
import { PlayerAttendanceComponent } from 'src/app/components/player-attendance/player-attendance.component';
import { PlayerScheduleComponent } from 'src/app/components/player-schedule/player-schedule.component';
import { AdminManageCoachesComponent } from 'src/app/components/admin-manage-coaches/admin-manage-coaches.component';

@NgModule({
  declarations: [
    DefaultComponent,
    AdminDashboardComponent,
    AdminManageCoachesComponent,
    CoachDashboardComponent,
    CoachTableComponent,
    CoachMatchesComponent,
    CoachPracticeSessionsComponent,
    PlayerDashboardComponent,
    PlayerTableComponent,
    PlayerMatchesComponent,
    PlayerPracticeSessionsComponent,
    PlayerAttendanceComponent,
    PlayerScheduleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }