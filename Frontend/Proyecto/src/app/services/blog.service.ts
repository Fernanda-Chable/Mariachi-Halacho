import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  url = 'http://localhost:4000/api/blog';

  constructor(private http: HttpClient) {}
  getBlog(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarBlog(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarblog(blog: Blog): Observable <any>{
  return this.http.post(this.url, blog);
}
}
