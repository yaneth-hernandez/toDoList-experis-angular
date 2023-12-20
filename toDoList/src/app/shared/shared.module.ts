import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TaskListComponent } from './TaskList/TaskList.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormComponent, TaskListComponent],
  exports:[FormComponent, TaskListComponent]
})
export class SharedModule { }
