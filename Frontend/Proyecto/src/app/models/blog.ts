

export class Blog {
  _id!: string;
  titulo: string;
  subtitulo: string;
  texto: string

  constructor(titulo: string, subtitulo: string, texto: string){
      this.titulo = titulo;
      this.subtitulo = subtitulo;
      this.texto = texto;
  }

}

export interface Blogs {
  _id: string;
  titulo: string;
  subtitulo: string;
  texto: string

}
