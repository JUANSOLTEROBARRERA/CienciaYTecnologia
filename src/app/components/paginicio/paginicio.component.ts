import { Component, HostDecorator, OnInit } from '@angular/core';
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
  model: any;
  lcolor: any;
  horaactual: any;

  constructor(private tasksServices: TasksService, public PubServices: PubService, public authService:AuthService) { }

  ngOnInit(): void {
    this.model=[
      {mensaje: "Mi nombre es Baymax. Contestaré a tus preguntas acerca de la plataforma de Ciencia y Tecnología. Si quieres salir, escribe 'salir'."},
      {mensaje:'Hola, ¿Puedes ayudarme?'},
      {mensaje: 'Hola, ¿Cómo te puedo ayudar?'},
      {mensaje:'¿Puedo publicar mi artículo aquí?'},
      {mensaje: 'Cualquier persona puede publicar sus artículos en esta plataforma.'},
      {mensaje:'¿Puedo eliminar un artículo que publiqué?'},
      {mensaje: 'Puedes eliminar tus publicaciones yendo a la sección de mis publicaciones con la cuenta iniciada.'},
      {mensaje:'¿Quién estuvo detrás del desarrollo de esta plataforma?'},
      {mensaje: 'Los nombres de los ingenieros que estuvieron detrás del desarrollo de esta plataforma se encuentran en la sección de acerca de nosotros.'},
      this.horaactual = [
        {horaxd:'10:44'}
      ]
    ]
    this.lcolor = false;
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
  cambiarcolor(){
    this.lcolor=!this.lcolor;
    return this.lcolor;
  }
  addZero(i:any) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  damehora(){
    var today = new Date();
    let m = this.addZero(today.getMinutes());
    var time = today.getHours() + ":" + m;
    this.horaactual = [
      {horaxd:time}
    ]
    return true
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
