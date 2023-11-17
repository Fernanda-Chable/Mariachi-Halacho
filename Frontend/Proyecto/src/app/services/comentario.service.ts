import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  url = 'http://localhost:4000/api/comentarios/';

  constructor(private http: HttpClient) {}
  getComentarios(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarComentario(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  
  guardarcomentario(comentario: Comentario): Observable <any>{
  return this.http.post(this.url, comentario);
  }
  obtenerComentario(id: string): Observable<any>{
    return this.http.get(this.url + id);

  }
}