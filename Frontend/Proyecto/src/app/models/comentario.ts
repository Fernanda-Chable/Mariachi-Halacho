export class Comentario {
    _id?: number;
    usuario: string;
    comentario: string;
    
  
    constructor(usuario: string, comentario: string ){
        this.usuario = usuario;
        this.comentario = comentario;
        
    }
}