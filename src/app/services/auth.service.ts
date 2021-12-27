import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
import { Pub } from '../models/pub';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private URL = 'http://localhost:3000/CienciaYTecnologia'

  selectedPub:User = {
    user: '', 
    pass: '',
    email: ''
  };
  users: User[];

  constructor(private http: HttpClient, private router: Router) { 
    this.users = [];
  }

  registro(user: any){
    return this.http.post<any>(this.URL + '/registro',user);

  }
  inisesion(user: any){
    return this.http.post<any>(this.URL + '/inisesion',user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getUsers(){
    return this.http.get<User[]>(this.URL+ '/usuarios');
  }
  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login'])
  }
  public name:any;
  public name2:any;
  revisar(pub: String){
    this.name = localStorage.getItem('username');
    this.name2 = pub;
    console.log(this.name)
    console.log(this.name2)
    if(this.name.match(this.name2)===null){
      console.log('falso');
      return false;
    }else{
      console.log('verdadero');
      return true;
    }
  }
}
