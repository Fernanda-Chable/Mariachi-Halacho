import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//igual es para el formulario del crud el ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//Componentes para cargar pagina del crud
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';

import { PagesAdminRoutingModule } from './pages-admin-routing.module';


@NgModule({
  declarations: [
    ListarReservaComponent,
  ],
  imports: [
    CommonModule,
    PagesAdminRoutingModule,

    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ]
})
export class PagesAdminModule { }
