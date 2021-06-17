import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from './app.component';
import { FilInfoComponent } from './components/includes/fil-info/fil-info.component';
import {HeaderComponent} from "./components/includes/header/header.component";
import { MenuComponent } from './components/base/menu/menu.component';
import { MissionsComponent } from './components/base/missions/missions.component';
import { StaffComponent } from './components/base/staff/staff.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilInfoComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
