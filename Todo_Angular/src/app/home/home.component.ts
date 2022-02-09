import { Component, OnInit } from '@angular/core';
import {ToDo} from "../model";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfTasks!: ToDo[]

  constructor(private taskSvc: TaskService) { }

  ngOnInit(): void {
    this.taskSvc.getAllTasks().then(result=>{
      this.listOfTasks = result
      console.log(this.listOfTasks)
    })
  }

}
