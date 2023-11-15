import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioAdminComponent } from '../layout/inicio-admin/inicio-admin.component';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';
const routes: Routes = [
  {path: 'admin',
  component: InicioAdminComponent ,
  children: [
  { path:'listar-reserva', component: ListarReservaComponent},
],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesAdminRoutingModule { }
