import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  user = {
    user:'',
    pass:'',
  }
  
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.authService.getUsers().subscribe(
      res => {
        this.authService.users = res;
      },
      err => console.error(err)
    )
  }

}
