import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  tarefa : string = "";

  constructor(private http : HttpClient) {}

  enviarTarefa() {
    this.http.post("http://localhost:3001/api/insert", {tarefa_middle : this.tarefa}).subscribe()
  }
}
