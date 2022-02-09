import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../services/task.service";
import {ToDo} from "../model";
import * as moment from "moment";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  form!: FormGroup
  tomorrow = new Date();
  toDoObj!:ToDo | undefined

  constructor(private fb:FormBuilder, private taskSvc:TaskService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.tomorrow.setDate(this.tomorrow.getDate()+1)
    this.createForm()
  }

  createForm(){
    this.form = this.fb.group({
      title: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      priority: this.fb.control('', Validators.required),
      dueDate: this.fb.control('', Validators.required)
    })
  }

  async processForm(){
    let taskObj: Partial<ToDo> = this.form.value as ToDo
    console.log(taskObj)
    taskObj.dueDate = moment(this.form.value.dueDate).format("DD/MM/YYYY")
    console.log(taskObj)
    await this.taskSvc.saveTask(taskObj as ToDo)
    this.form.reset()
  }





}
