import { Component, OnInit } from '@angular/core';
import {ToDo} from "../model";
import {TaskService} from "../services/task.service";
import {CloudService} from "../services/cloud.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfTasks!: ToDo[]

  constructor(private taskSvc: TaskService, private cloudSvc: CloudService) { }

  ngOnInit(): void {
    this.taskSvc.getAllTasks().then(result=>{
      this.listOfTasks = result
      console.log(this.listOfTasks)
    })
  }

  async saveToCloud(){
    try{
      await this.cloudSvc.saveTasks(this.listOfTasks)
      await alert("Your tasks have been saved!")
      await this.taskSvc.resetAll()
      await this.ngOnInit()
    }catch(Exception){
      alert("Something went wrong!")
    }


  }


}
