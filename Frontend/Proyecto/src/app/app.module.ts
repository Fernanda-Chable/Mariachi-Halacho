import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas principales
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Rutas del contenedor principal
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { InicioComponent } from './layout/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';


//igual es para el formulario del crud el ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//Componentes para cargar pagina del crud
import { CrearReservaComponent } from './pages/crear-reserva/crear-reserva.component';
import { ListarReservaComponent } from './admin/pages/listar-reserva/listar-reserva.component';
import { ComentarioComponent } from './pages/comentario/comentario.component';
import { ListarComentarioComponent } from './pages/listar-comentario/listar-comentario.component';

//Componentes del pages
import { LocationComponent } from './pages/location/location.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RepertorioComponent } from './pages/repertorio/repertorio.component';
import { VServiciosComponent } from './pages/v-servicios/v-servicios.component';
import { FilterPipe } from './pages/my-filter.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
//Componentes del administrador
import { MenuComponent } from './admin/layout/menu/menu.component';
import { InicioAdminComponent } from './admin/layout/inicio-admin/inicio-admin.component';
import { BodyComponent } from './admin/layout/body/body.component';
import { PagesAdminModule } from './admin/pages/pages-admin.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    //Componentes para cargar pagina del crud
    CrearReservaComponent,


    //Componentes para el pages
    LocationComponent,
    BlogComponent,
    RepertorioComponent,
    VServiciosComponent,
    FilterPipe,
    HomeComponent,

    //componentes para el administrador
    InicioAdminComponent,
    MenuComponent,
    BodyComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   PagesAdminModule,
   PagesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    HttpClientModule
  ],

  exports: [
    //Prueba para cargar pagina del crud
    CrearReservaComponent,
    LoginComponent,
    SignInComponent

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
