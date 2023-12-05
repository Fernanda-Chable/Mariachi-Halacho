import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-crear-blog',
  templateUrl: './crear-blog.component.html',
  styleUrls: ['./crear-blog.component.scss']
})
export class CrearBlogComponent implements OnInit {


  blo: Blog[]=[];
  blog!: Blog;
  getId!: string;

  constructor(private sc: BlogService ){

  }

  ngOnInit(): void {

    this.sc.getBlogs().subscribe((resp) =>{
      this.blo = resp;
    })

  }

  openModal(id: string){
    this.getId = id;
    console.log(this.getId);
    this.sc.getBlog(id).subscribe(res =>{
      this.blog = res;
    });
  }

  update(id: string){
    this.sc.updateBlog(id).subscribe(resp => {
      console.log(resp);
    })
  }

  delete(id: string) {
    this.sc.eliminarBlog(id).subscribe(resp => {
      console.log(resp);
      this.ngOnInit();
    })
  }

}
