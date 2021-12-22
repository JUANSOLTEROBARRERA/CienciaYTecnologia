import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service'

@Component({
  selector: 'app-paginicio',
  templateUrl: './paginicio.component.html',
  styleUrls: ['./paginicio.component.css']
})
export class PaginicioComponent implements OnInit {

  tasks = [];

  constructor(private tasksServices: TasksService) { }

  ngOnInit(): void {
    this.tasksServices.getTasks()
    .subscribe(
      res => {
        console.log(res)
        this.tasks = res;
      },
      err => console.log(err)
    )
  }

}
