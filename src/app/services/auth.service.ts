import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/CienciaYTecnologia'

  constructor(private http: HttpClient, private router: Router) { }

  registro(user: any){
    return this.http.post<any>(this.URL + '/registro',user);

  }
  inisesion(user: any){
    return this.http.post<any>(this.URL + '/inisesion',user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
