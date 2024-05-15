import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ComentarioComponent } from './comentario/comentario.component';
import { ListarComentarioComponent } from './listar-comentario/listar-comentario.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    ComentarioComponent,
    ListarComentarioComponent,
    LoginComponent,
    SignInComponent,
    CalendarioComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,

  ],
  exports: [
    ComentarioComponent,
    ListarComentarioComponent,
    LoginComponent,
    SignInComponent,
   
  ],
})
export class PagesModule { }
