import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ShowTaskComponent} from "./show-task/show-task.component";

const routes: Routes = [{path:'',component: MainComponent, children:[{path:'task/:id',component:ShowTaskComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
