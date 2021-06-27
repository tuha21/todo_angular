import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TodoDetailComponent } from "../components/todo-detail/todo-detail.component";
import { TodoListComponent } from "../components/todo-list/todo-list.component";

const routes = [
    {path: 'todolist', component: TodoListComponent},
    {path: 'tododetail/:id', component: TodoDetailComponent},
]

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ]
})
export class TodoRoutingModle {}