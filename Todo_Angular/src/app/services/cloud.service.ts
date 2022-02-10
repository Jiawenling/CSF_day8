import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDo} from "../model";
import {lastValueFrom} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(private http: HttpClient) { }

  saveTasks(toDoList:ToDo[]): Promise<any>{
    return lastValueFrom(this.http.post('http://localhost:8080/saved', toDoList))
  }
}



