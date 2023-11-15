import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Componentes para cargar pagina del crud

import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';
import { PagesAdminRoutingModule } from './pages-admin-routing.module';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    PagesAdminRoutingModule,

    
  ],
  
})
export class PagesAdminModule { }
