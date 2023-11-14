import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './layout/inicio/inicio.component';
import {InicioAdminComponent} from './admin/layout/inicio-admin/inicio-admin.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages-routing.module').then((m) => m.PagesRoutingModule)
      }
    ]
  },
  {
    path:"admin", component: InicioAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/pages/pages-admin.module').then((m) => m.PagesAdminModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }


];


@NgModule({
  imports:
  [
    RouterModule.forRoot(routes)
  ],

  exports:
  [
    RouterModule
  ]

})
export class AppRoutingModule { }
