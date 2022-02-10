import {Injectable} from '@angular/core';
// @ts-ignore
import {v4 as uuidv4} from 'uuid'
import {ToDo} from "../model";
import Dexie from 'dexie'
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class TaskService extends Dexie{

  task: Dexie.Table<ToDo, string>

  constructor() {
    super('TaskList')
    this.version(1).stores({
      task: 'taskId'
    });
    this.task = this.table('task')
  }

  generateTaskId(){
    return uuidv4().toString().substring(1,8)
  }

  async updateTask(toDoObj: Partial<ToDo>, taskID:string){
    toDoObj.dueDate = moment(toDoObj.dueDate).format("DD/MM/YYYY")
    await this.task.update(taskID,toDoObj as ToDo)
    console.log("done saving>>>>>>>>>")
  }

  async saveTask(toDoObj: Partial<ToDo>){
    toDoObj.taskId = this.generateTaskId()
    toDoObj.dueDate = moment(toDoObj.dueDate).format("DD/MM/YYYY")
    await this.task.put(toDoObj as ToDo, toDoObj.taskId)
    console.log("done saving>>>>>>>>>")
  }


  async getAllTasks(){
    let listToDo: ToDo[]= await this.task.toArray()
    return listToDo
  }

  getTaskFromId(id: String){
    return this.task.get(id) as Promise<ToDo>
  }

  deleteTask(id:string){
    this.task.delete(id)
  }

}
