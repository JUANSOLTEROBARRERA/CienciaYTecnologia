import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pub } from '../models/pub';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  URL_API = 'http://localhost:3000/CienciaYTecnologia'

  selectedPub:Pub = {
    nombre: '', 
    titulo: '',
    desc: '',
    enlace: ''
  };
  pubs: Pub[];
  message:any;
  constructor(private http: HttpClient) {
    this.pubs = [];
  }

  getPubs(){
    return this.http.get<Pub[]>(this.URL_API);
  }
  createPub(pub: Pub){
    this.message = localStorage.getItem('username');
    pub.nombre = this.message;
    return this.http.post(this.URL_API, pub);
  }
  putPub(pub: Pub){
    this.message = localStorage.getItem('username');
    pub.nombre = this.message;
    return this.http.put(`${this.URL_API}/${pub._id}`, pub);
  }
  deletePub(_id: String){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
