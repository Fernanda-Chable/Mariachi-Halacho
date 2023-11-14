const mongoose = require('mongoose');

const ReservaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  localidad: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  metodoPago: {
    type: String,
    required: true,
  },
});

// Establecemos un campo virtual con nombre "fechaVirtual"
ReservaSchema.virtual('fechaVirtual')
  .set(function(fecha) {
    this.fecha = new Date(fecha);
  })
  .get(function(){
    return this.fecha.toISOString().substring(0,10);
  });

module.exports = mongoose.model('Reserva', ReservaSchema);
