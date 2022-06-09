import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RoutlinkComponent } from './routlink/routlink.component';
import {GetDataComponent} from './get-data/get-data.component';
import { RoutlinkComponent } from './routlink/routlink.component';

const routes: Routes = [
  {path:'routlink', component:RoutlinkComponent},
  {path:'get-data', component:GetDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents=[GetDataComponent]
