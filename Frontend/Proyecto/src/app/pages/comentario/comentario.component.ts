import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit{
  comentarioForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _comentarioServices: ComentarioService){
    this.comentarioForm = this.fb.group({
    usuario: ['',Validators.required],
    comentario: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
    agregarComentario(){
      //console.log(this.comentarioForm)

      console.log(this.comentarioForm.get('comentario')?.value)
      console.log(this.comentarioForm.get('usuario')?.value)

      const COMENTARIO: Comentario = {
      usuario: this.comentarioForm.get('usuario')?.value,
      comentario: this.comentarioForm.get('comentario')?.value,
    }

    console.log(COMENTARIO);
    this. _comentarioServices.guardarcomentario(COMENTARIO).subscribe (data =>{
      this.toastr.success('¡El comentario se añadio con exito!', '¡Comentario Registrado!');
      this.router.navigate(['/listar-comentario'])
    }, error => {
      console.log(error);
      this.comentarioForm.reset();
    })
  }
}
