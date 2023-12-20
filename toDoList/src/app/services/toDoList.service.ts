import { Injectable } from '@angular/core';
import { TODOS } from '../mocks/TODOS';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

constructor() { }

getToDoList(){
  return of(TODOS)
}

}
