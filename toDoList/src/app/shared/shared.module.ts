import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TaskListComponent } from './TaskList/TaskList.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  // declarations: [FormComponent, TaskListComponent, HeaderComponent],
  // exports:[FormComponent, TaskListComponent, HeaderComponent]
})
export class SharedModule { }
