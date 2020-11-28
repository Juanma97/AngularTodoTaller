import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo = ''
  todos: any[] = []


  addTodo() {
    if(this.todo != ''){
      this.todos = [...this.todos, this.todo]
    }
  }

  completed(todoCompleted) {
    this.todos = this.todos.filter(todo => todo != todoCompleted)
  }
}
