

export class Blog {
  _id?: number;
  titulo: string;
  subtitulo: string;
  texto: string

  constructor(titulo: string, subtitulo: string, texto: string){
      this.titulo = titulo;
      this.subtitulo = subtitulo;
      this.texto = texto;
  }
}
