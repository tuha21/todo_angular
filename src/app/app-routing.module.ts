import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoRoutingModle } from './routes/todo-routing.module';

const routes: Routes = [
  {path: '', redirectTo: '/todolist', pathMatch: 'full'}
];

@NgModule({
  imports: [
    TodoRoutingModle,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
