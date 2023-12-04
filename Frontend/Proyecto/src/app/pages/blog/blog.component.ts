import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadJSService } from 'src/app/services/load-js.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent{
  blogForm: FormGroup;

  constructor(private Script: LoadJSService, private fb: FormBuilder){
    Script.Carga(["FuncionBlog"]);
    this.blogForm = this.fb.group({
      titulo: ['', Validators.required],
      subtitle: ['', Validators.required],
      texto: ['', Validators.required],
    });
  }

}

