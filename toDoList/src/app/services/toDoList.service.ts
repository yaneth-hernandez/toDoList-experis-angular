import { Injectable } from '@angular/core';
import { TODOS } from '../mocks/TODOS';
import { of } from 'rxjs';
import { ToDoList } from '../models/ToDoList';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

constructor() { }

getToDoList(){
  return of(TODOS)
}

addItem(toDo:ToDoList){
  return TODOS.push(toDo)
}

editItem(id:number){
  console.log(id)
}


deleteItem(toDo:ToDoList){

  return of(toDo)
}

}
