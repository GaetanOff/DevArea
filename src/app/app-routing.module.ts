import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/base/home/home.component";
import {PrincipalComponent} from "./components/includes/principal/principal.component";
import {NetworkComponent} from "./components/base/network/network.component";
import {StatsComponent} from "./components/base/stats/stats.component";
import {MenuComponent} from "./components/base/menu/menu.component";
import {MissionsComponent} from "./components/base/missions/missions.component";
import {StaffComponent} from "./components/base/staff/staff.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "principal", component: PrincipalComponent
  },
  {
    path: "network", component: NetworkComponent
  },
  {
    path: "stats", component: StatsComponent
  },
  {
    path: "menu", component: MenuComponent
  },
  {
    path: "missions", component: MissionsComponent
  },
  {
    path: "staff", component: StaffComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  PrincipalComponent,
  NetworkComponent,
  StatsComponent,
  MenuComponent,
  MissionsComponent,
  StaffComponent
]
