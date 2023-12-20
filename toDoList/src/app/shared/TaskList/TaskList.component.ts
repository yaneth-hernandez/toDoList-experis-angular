import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ToDoList } from '../../models/ToDoList';
import { ToDoListService } from '../../services/toDoList.service';

@Component({
  selector: 'app-TaskList',
  templateUrl: './TaskList.component.html',
  styleUrls: ['./TaskList.component.css'],
})
export class TaskListComponent implements OnInit, AfterViewInit {
  toDoList: ToDoList[] = [];
  priority: string = '';
  idTask: number = 0;

  @ViewChild('rowTask') rowTask!: ElementRef;
  @ViewChild('priorityItem') priorityItem!: ElementRef;
  @ViewChild('statusItem') statusItem!: ElementRef;

  constructor(private toDoListService: ToDoListService) {}

  ngOnInit() {
    this.toDoListService
      .getToDoList()
      .subscribe((toDos) => (this.toDoList = toDos));


  }

  ngAfterViewInit(): void {
    this.validatePriority();
  }

  validatePriority() {
    this.toDoList.forEach((element) => {
      switch (element.priority) {
        case 'alta':
          this.rowTask.nativeElement.style.backgroundColor = 'red';
          break;
        case 'media':
          this.rowTask.nativeElement.style.backgroundColor = 'orange';
          break;
        case 'baja':
          this.rowTask.nativeElement.style.backgroundColor = 'green';
          break;
        default:
          this.rowTask.nativeElement.style.backgroundColor = 'white';
      }
    });
  }
}

// switch(element.priority){
//   case 'alta':
//   this.rowTask.nativeElement.style.backgroundColor = 'red';
//   break;
//   case 'media':
//   this.rowTask.nativeElement.style.backgroundColor = 'orange';
//   break;
//   case 'baja':
//   this.rowTask.nativeElement.style.backgroundColor = 'green';
//   break;
//   default:
//     this.rowTask.nativeElement.style.backgroundColor = 'white';
// }
