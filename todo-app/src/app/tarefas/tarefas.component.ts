import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor(private http : HttpClient) { }

  tarefas !: Array[]

  ngOnInit(): void {
    this.http.get<Array[]>("http://localhost:3001/api/select").subscribe((items: Array[]) => {
      this.tarefas = items;
    });
  }

  excluirTarefa(id : number = 0) {
    this.http.delete("http://localhost:3001/api/delete/" + id).subscribe()
  }

}

class Array {
  nome !: string;
  id !: number;
}