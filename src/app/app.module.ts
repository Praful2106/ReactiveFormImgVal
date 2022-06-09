import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RoutlinkComponent } from './routlink/routlink.component';
import { GetDataComponent } from './get-data/get-data.component';
 

@NgModule({
  declarations: [
    AppComponent,
    RoutlinkComponent,
    GetDataComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
