import { Component } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-listar-comentario',
  templateUrl: './listar-comentario.component.html',
  styleUrls: ['./listar-comentario.component.scss']
})
export class ListarComentarioComponent {
listComentarios: Comentario[] = [];

  constructor(private _comentarioService: ComentarioService,
      private toastr: ToastrService){}

  ngOnInit(): void{
    this.obtenerComentarios();
  }

    obtenerComentarios(){
      this._comentarioService.getComentarios().subscribe(data => {
        console.log(data);
        this.listComentarios = data;
      }, error =>{
        console.log(error);
      })
    }

    eliminarComentario(id: any){
      this._comentarioService.eliminarComentario(id).subscribe(data =>{
        this.toastr.error('El comentario se elimino con exito', 'Comentario Eliminado');
        this.obtenerComentarios();
      }, error =>{
        console.log(error);
      })
  }
}