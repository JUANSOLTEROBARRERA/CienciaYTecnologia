import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AppComponent } from './app.component';
import { PaginicioComponent } from './components/paginicio/paginicio.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'contactos', component:ContactosComponent},
  { path: 'inicio', component:PaginicioComponent},
  { path: 'login', component:LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({   imports: [RouterModule.forRoot(routes)],   
  exports: [RouterModule] }) 
  export class AppRoutingModule { }
