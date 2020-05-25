import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PlayerDashboardComponent } from './components/player-dashboard/player-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CoachDashboardComponent } from './components/coach-dashboard/coach-dashboard.component';
import { CoachTableComponent } from './components/coach-table/coach-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    PlayerDashboardComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    CoachDashboardComponent,
    CoachTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
