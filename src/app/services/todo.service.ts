import { Injectable } from "@angular/core";
import { baseURL } from "../constants/constants";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Todo } from "../entitys/Todo";
@Injectable({
    providedIn: "root"
})
export class TodoService {
    
    constructor(private httpClient: HttpClient) {

    }

    getToDoList(): Observable<Todo[]>{
        return this.httpClient.get<Todo[]>(`${baseURL}`);
    }

    getTodoById(id : number):  Observable<Todo>{
        return this.httpClient.get<Todo>(`${baseURL}/${id}`);
    }

    createTodo(todo : Todo): Observable<Todo>{
        return this.httpClient.post<Todo>(`${baseURL}`, todo);
    }

    updatedTodo(id : number, todo : Todo) : Observable<Todo> {
        return this.httpClient.put<Todo>(`${baseURL}/${id}`, todo)
    }

    deleteTodo(id : number) : Observable<Todo> {
        return this.httpClient.delete<Todo>(`${baseURL}/${id}`)
    }
}