import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { LoadJSService } from 'src/app/services/load-js.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  blogForm: FormGroup;
  blog: any;

  constructor(
    private service: BlogService,
    private Script: LoadJSService,
    private fb: FormBuilder){
    Script.Carga(["FuncionBlog"]);
    this.blogForm = this.fb.group({
      titulo: ['', Validators.required],
      subtitulo: ['', Validators.required],
      texto: ['', Validators.required],
    });



  }
  ngOnInit(): void {
    this.service.getBlog().subscribe(
      (data) => {
        // console.log(data);
        this.blog = data;
        this.blogForm.get('titulo')?.setValue(data.titulo);
        this.blogForm.get('subtitulo')?.setValue(data.subtitulo);
        this.blogForm.get('texto')?.setValue(data.texto);
        console.log(this.blog.titulo);

      }
    );
  }

  agregarBlog() {
    this.service.addBlog(this.blogForm).subscribe( res =>
      (console.log(res))
    );
  }

  actualizarBlog(id: any) {
    this.service.updateBlog(this.blog[0]).subscribe(
      res => console.log(res)
    )
  }



}

