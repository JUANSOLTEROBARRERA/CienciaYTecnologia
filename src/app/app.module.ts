import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginicioComponent } from './components/paginicio/paginicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PrivadasComponent } from './components/privadas/privadas.component';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    PaginicioComponent,
    LoginComponent,
    RegistroComponent,
    PrivadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
