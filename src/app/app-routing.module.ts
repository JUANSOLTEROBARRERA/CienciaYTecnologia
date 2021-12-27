import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AppComponent } from './app.component';
import { PaginicioComponent } from './components/paginicio/paginicio.component';
import { LoginComponent } from './components/login/login.component';
import { PrivadasComponent } from './components/privadas/privadas.component';
import { RegistroComponent } from './components/registro/registro.component';

import {AuthGuard} from './auth.guard'
import { AcercaComponent } from './components/acerca/acerca.component';

const routes: Routes = [
  { path: 'contactos', component:ContactosComponent, canActivate: [AuthGuard]},
  { path: 'inicio', component:PaginicioComponent},
  { path: 'login', component:LoginComponent},
  { path: 'registro', component:RegistroComponent},
  { path: 'acerca', component:AcercaComponent},
  { path: 'solicitudes', component:PrivadasComponent, canActivate: [AuthGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({   imports: [RouterModule.forRoot(routes)],   
  exports: [RouterModule] }) 
  export class AppRoutingModule { }
