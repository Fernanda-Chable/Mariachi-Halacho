const mongoose = require ('mongoose');

const ComentarioSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
      },
      comentario: {
        type: String,
        required: true,
      },
})
module.exports = mongoose.model('Comentario',ComentarioSchema);