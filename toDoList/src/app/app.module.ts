import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { FormComponent } from './shared/form/form.component';
import { TaskListComponent } from './shared/TaskList/TaskList.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    FormComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
