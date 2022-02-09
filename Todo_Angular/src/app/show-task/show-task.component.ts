import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Route, Router, Routes} from "@angular/router";
import {TaskService} from "../services/task.service";
import {ToDo} from "../model";
import {MainComponent} from "../main/main.component";
import * as moment from "moment";

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit, AfterViewInit {

  toDoObj!: ToDo
  taskID!: string
  constructor(private routes: Router,private activeRouter: ActivatedRoute, private taskSvc: TaskService) { }

  @ViewChild(MainComponent)
  mainComponent!: MainComponent

  async ngOnInit() {
    this.taskID = this.activeRouter.snapshot.params['id']
    console.log(this.taskID)
  }

  async ngAfterViewInit() {
    this.toDoObj= await this.taskSvc.getTaskFromId(this.taskID)
    console.log(this.toDoObj)
    if(this.toDoObj==undefined){
      console.log(">>>>>>not ready")
    }
    let dateObj = new Date(this.toDoObj.dueDate)
    this.mainComponent.form.setValue({
      title: this.toDoObj.title,
      priority: this.toDoObj.priority,
      dueDate: moment(dateObj)
    })

  }

  async delete(){
    try{
      await this.taskSvc.deleteTask(this.taskID)
      await this.routes.navigate(['/'])
    }catch(Exception){
      console.log("Something went wrong")
    }



  }

  update(){

  }


}
