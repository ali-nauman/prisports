import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FullwidthComponent } from './fullwidth.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { HomeComponent } from 'src/app/components/home/home.component';

@NgModule({
  declarations: [
    FullwidthComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FullwidthModule { }