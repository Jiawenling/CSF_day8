import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ShowTaskComponent} from "./show-task/show-task.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{path:'',component:HomeComponent},
  {path:'task/:id', component:ShowTaskComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
