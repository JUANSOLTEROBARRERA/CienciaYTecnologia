import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    user:'',
    pass:'',
  }

  public username:any;

  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  inisesion(){
    this.authService.inisesion(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        let message: string;
        message = this.user.user;
        localStorage.setItem('username', message);
        this.username = localStorage.getItem('username');
        console.log(localStorage.getItem('token'));
        this.router.navigate(['/solicitudes']);
      },
      err => console.log(err)
    )
  }
}
