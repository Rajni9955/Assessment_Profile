import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MapDisplayComponent } from './map-display/map-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path : '', component : ProfileListComponent},
  {path : 'ProfileList', component : ProfileListComponent},
  {path : 'ProfileDetails', component : ProfileDetailsComponent},
  {path : 'MapDisplay', component : MapDisplayComponent},
  {path : 'DashBorad', component: DashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
