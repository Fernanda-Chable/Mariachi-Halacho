import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  comentarioForm: FormGroup;
  listComentarios: Comentario[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _comentarioServices: ComentarioService
  ) {
    this.comentarioForm = this.fb.group({
      usuario: ['', Validators.required],
      comentario: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  agregarComentario() {
    console.log(this.comentarioForm.get('comentario')?.value);
    console.log(this.comentarioForm.get('usuario')?.value);

    const COMENTARIO: Comentario = {
      usuario: this.comentarioForm.get('usuario')?.value,
      comentario: this.comentarioForm.get('comentario')?.value,
    };

    console.log(COMENTARIO);
    this._comentarioServices.guardarcomentario(COMENTARIO).subscribe(
      (data) => {
        this.toastr.success('¡El comentario se añadió con éxito!', '¡Comentario Registrado!');
        this.router.navigate(['/listar-comentario']);
        this.obtenerComentarios(); // Actualiza la lista después de agregar un comentario
      },
      (error) => {
        console.log(error);
        this.comentarioForm.reset();
      }
    );
  }

  obtenerComentarios() {
    this._comentarioServices.getComentarios().subscribe(
      (data) => {
        console.log(data);
        this.listComentarios = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarComentario(id: any) {
    this._comentarioServices.eliminarComentario(id).subscribe(
      (data) => {
        this.toastr.error('El comentario se eliminó con éxito', 'Comentario Eliminado');
        this.obtenerComentarios(); // Actualiza la lista después de eliminar un comentario
      },
      (error) => {
        console.log(error);
      }
    );
  }
}