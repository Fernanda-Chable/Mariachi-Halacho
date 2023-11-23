import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ComentarioComponent } from './comentario/comentario.component';
import { ListarComentarioComponent } from './listar-comentario/listar-comentario.component';

@NgModule({
  declarations: [
    ComentarioComponent,
    ListarComentarioComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  
  ],
  exports: [
  ComentarioComponent,
    ListarComentarioComponent,
  ],
})
export class PagesModule { }
