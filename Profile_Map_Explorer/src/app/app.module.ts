import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MapDisplayComponent } from './map-display/map-display.component';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    ProfileDetailsComponent,
    MapDisplayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
