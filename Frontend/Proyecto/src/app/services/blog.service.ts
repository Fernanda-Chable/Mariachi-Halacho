import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url = 'http://localhost:8001/api/blog';

  constructor(private http: HttpClient) {}
  getBlog(): Observable<any> {
    return this.http.get(this.url);
  }

  addBlog(blog: any): Observable<any> {
    return this.http.post(this.url, blog);
  }

  updateBlog(id: any) {
    return this.http.put(this.url, id);
  }

  eliminarBlog(id: any): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarblog(blog: Blog): Observable <any>{
  return this.http.post(this.url, blog);
}
}
