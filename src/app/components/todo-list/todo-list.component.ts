import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/entitys/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList : Todo[] = [];

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todoService.getToDoList().subscribe(data => {
      this.todoList = data
    })
  }
  onDelete(id: number) {
    this.todoService.deleteTodo(id).subscribe();
    const index = this.todoList.findIndex(val => {
      return val.id
    })
    this.todoList.splice(index, 1);
  }
}
