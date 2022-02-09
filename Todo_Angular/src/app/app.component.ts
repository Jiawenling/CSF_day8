import {Component, OnInit} from '@angular/core';
import {TaskService} from "./services/task.service";
import {ToDo} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todo_Angular';
  listOfTasks!: ToDo[]

  constructor(private taskSvc: TaskService) {
  }

  ngOnInit() {
    this.taskSvc.getAllTasks().then(result=>{
     this.listOfTasks = result
    })
  }
}
