import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesAdminRoutingModule } from './pages-admin-routing.module';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component'; // Importa tu componente aquí

@NgModule({
  declarations: [
    // Aquí declaras todos los componentes que pertenecen a este módulo
    ListarReservaComponent,
    // Otros componentes que puedas tener en este módulo
  ],
  imports: [
    CommonModule,
    PagesAdminRoutingModule,
    // Otros módulos que puedas necesitar
  ],
  exports: [
    // Aquí exportas los componentes que quieres que estén disponibles fuera de este módulo
    ListarReservaComponent,
    // Otros componentes que puedas exportar
  ],
})
export class PagesAdminModule {}
