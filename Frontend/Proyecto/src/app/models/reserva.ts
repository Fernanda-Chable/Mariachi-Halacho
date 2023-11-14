

export class Reserva {
  _id?: number;
  nombre: string;
  apellidos: string;
  telefono: string;
  localidad: string;
  direccion: string;
  fecha: Date;
  hora: string;
  metodoPago: string;

  constructor(nombre: string, apellidos: string, telefono: string, localidad: string, direccion: string, fecha: Date, hora: string, metodoPago: string ){
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.telefono = telefono;
      this.localidad = localidad;
      this.direccion = direccion;
      this.fecha = fecha;
      this.hora = hora;
      this.metodoPago = metodoPago;
  }
}
