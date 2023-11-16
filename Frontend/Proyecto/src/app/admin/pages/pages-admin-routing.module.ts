import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioAdminComponent } from '../layout/inicio-admin/inicio-admin.component';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';
import { CrearRepertorioComponent } from './crear-repertorio/crear-repertorio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrearBlogComponent } from './crear-blog/crear-blog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path:'listar-reserva', component: ListarReservaComponent},
  { path:'crear-repertorio', component: CrearRepertorioComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'crear-blog', component: CrearBlogComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesAdminRoutingModule { }
