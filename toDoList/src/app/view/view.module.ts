import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    // RouterModule.forChild([
    //   {
    //     path:'',
    //     component:ViewComponent
    //   }
    // ])
  ],
})
export class ViewModule { }
