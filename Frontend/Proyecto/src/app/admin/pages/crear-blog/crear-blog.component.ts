import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-crear-blog',
  templateUrl: './crear-blog.component.html',
  styleUrls: ['./crear-blog.component.scss'],
})
export class CrearBlogComponent implements OnInit {
  blo: Blog[] = [];
  blog!: Blog;
  getId!: string;

  constructor(private sc: BlogService) {}

  ngOnInit(): void {
    this.sc.getBlogs().subscribe((resp) => {
      this.blo = resp;
    });
  }

  openModal(id: string) {
    this.getId = id;
    console.log(this.getId);
    this.sc.getBlog(id).subscribe((res) => {
      this.blog = res;
      console.log(this.blog);
    });
  }

  update(id: string) {
    this.sc.updateBlog(id, this.blog).subscribe((resp) => {
      console.log(resp);
      this.ngOnInit();
    });

  }

  delete(id: string) {
    this.sc.eliminarBlog(id).subscribe((resp) => {
      console.log(resp);
      this.ngOnInit();
    });
  }
}
