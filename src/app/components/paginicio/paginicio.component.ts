import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service'
import { PubService } from '../../services/pub.service';
import { NgForm } from '@angular/forms'
import { Pub } from 'src/app/models/pub';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-paginicio',
  templateUrl: './paginicio.component.html',
  styleUrls: ['./paginicio.component.css']
})
export class PaginicioComponent implements OnInit {

  tasks = [];
  

  constructor(private tasksServices: TasksService, public PubServices: PubService, public authService:AuthService) { }

  ngOnInit(): void {
    this.getPubs();
    this.tasksServices.getTasks()
      .subscribe(
        res => {
          console.log(res)
          this.tasks = res;
        },
        err => console.log(err)
      )
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getPubs() {
    this.PubServices.getPubs().subscribe(
      res => {
        this.PubServices.pubs = res;
      },
      err => console.log(err)
    )
  }

  addPub(form: NgForm) {
    if (form.value._id) {
      this.PubServices.putPub(form.value).subscribe(
        res => {
          console.log(res);
          },
        err => console.error(err)
      )
      form.reset()
      this.getPubs()
    } else {
      this.PubServices.createPub(form.value).subscribe(
        res => {
          this.getPubs();
          form.reset();
        },
        err => console.error(err)
      );
    }
  }

  deletePub(id: string) {
    if (confirm('¿Seguro de que deseas eliminar la publicación?')) {
      this.PubServices.deletePub(id)
        .subscribe(
          res => this.getPubs(),
          err => console.error(err)
        )
    }
  }
  editPub(pub: Pub) {
    this.PubServices.selectedPub = pub;
    this.getPubs();
  }
  getValue() {
    return localStorage.getItem('username');  
  }
}
