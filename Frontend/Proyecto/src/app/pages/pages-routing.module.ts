import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { LocationComponent } from './location/location.component';
import {RepertorioComponent} from './repertorio/repertorio.component';
import { VServiciosComponent } from './v-servicios/v-servicios.component';
import { CrearReservaComponent } from './crear-reserva/crear-reserva.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ListarComentarioComponent } from './listar-comentario/listar-comentario.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

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
      { path: 'crear-reserva', component: CrearReservaComponent },
      {path:'comentario',component:ComentarioComponent},
      {path: 'editarComentario/:id', component:ComentarioComponent},
      {path:'listar-comentario',component:ListarComentarioComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signIn', component: SignInComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
