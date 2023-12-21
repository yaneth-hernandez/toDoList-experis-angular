import { Component, OnInit } from '@angular/core';
import { FormGroup,
  FormBuilder,
  FormControl,
  Validators, } from '@angular/forms';
import { ToDoListService } from 'src/app/services/toDoList.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  validateForm!: FormGroup;

  constructor
  (
    private formBuilder: FormBuilder,
    private toDoListService:ToDoListService
  ) { }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      pririoty: new FormControl('', [Validators.required]),
      status: new FormControl(undefined, [Validators.required]),
    });
  }

  submit(){
console.log(this.validateForm.value)
    this.toDoListService.addItem(this.validateForm.value)
  }

}


//Ngx y RxJS
//https://angular.io/guide/rx-library
//https://dominicode.com/que-es-ngxs/

