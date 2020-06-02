import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { AdminUserTableComponent } from './components/admin-user-table/admin-user-table.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminUserTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
