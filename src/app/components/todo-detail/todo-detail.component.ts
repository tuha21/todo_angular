import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Todo } from 'src/app/entitys/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  id : number = -1

  value = "iajias"

  todo = {
    id : 0,
    name : '',
    status : false
  }

  constructor(private route : ActivatedRoute, private todoService : TodoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"]
    this.todoService.getTodoById(id).subscribe(data => {
      this.todo = data
    })
  }

  onSubmit (formDetail : any) {
    
    var patt= new RegExp('[0-9]');
    if(!Validators.required(formDetail.controls.name) && !patt.test(this.todo.name)){
      this.todoService.updatedTodo(this.todo.id, this.todo).subscribe(data => {
        console.log(data)
      })
      alert("Update Complete!")
      // console.log(this.todo)
    }
    else alert("Information not valid!")
  }

}
