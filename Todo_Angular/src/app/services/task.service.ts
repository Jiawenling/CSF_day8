import {Injectable} from '@angular/core';
// @ts-ignore
import {v4 as uuidv4} from 'uuid'
import {ToDo} from "../model";
import Dexie from 'dexie'

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

  generateTaskId(toDoObj: Partial<ToDo>){
    toDoObj.taskId= uuidv4().toString().substring(1,8)
  }

  async saveTask(toDoObj: Partial<ToDo>){
    this.generateTaskId(toDoObj)
    console.log(">>>>>>saving")
    // try{
    //
    // } catch(Exception){
    //   console.warn("something went wrong")
    // }
    await this.task.put(toDoObj as ToDo)
    console.log("done saving")
  }

  async getAllTasks(){
    let listToDo: ToDo[]= await this.task.toArray()
    return listToDo
  }

  getTaskFromId(id: String){
    return this.task.get(id) as Promise<ToDo>
  }

}
