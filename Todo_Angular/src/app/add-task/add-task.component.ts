import {Component, OnInit, ViewChild} from '@angular/core';
import {ToDo} from "../model";
import * as moment from "moment";
import {TaskService} from "../services/task.service";
import {MainComponent} from "../main/main.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskSvc: TaskService, private route:Router) { }

  @ViewChild(MainComponent)
  mainComponent!: MainComponent

  ngOnInit(): void {
  }

  async processForm(){
    let taskObj: Partial<ToDo> = this.mainComponent.form.value as ToDo
    await this.taskSvc.saveTask(taskObj as ToDo)
    this.mainComponent.form.reset()
    await this.route.navigate(['/'])
  }
}
