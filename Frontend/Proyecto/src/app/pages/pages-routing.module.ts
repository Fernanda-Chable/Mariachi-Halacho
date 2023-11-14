import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { LocationComponent } from './location/location.component';
import {RepertorioComponent} from './repertorio/repertorio.component';
import { VServiciosComponent } from './v-servicios/v-servicios.component';
const routes: Routes = [
 
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'location', component: LocationComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contacto', component: LocationComponent },
      { path: 'repertorio', component: RepertorioComponent },
      { path: 'vServicio', component: VServiciosComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
