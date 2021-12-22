import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-privadas',
  templateUrl: './privadas.component.html',
  styleUrls: ['./privadas.component.css']
})
export class PrivadasComponent implements OnInit {

  tasks = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getPrivateTasks()
    .subscribe(
      res => {
        console.log(res)
        this.tasks = res;
      },
      err => console.log(err)
    )
  }

}
