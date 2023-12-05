const mongoose = require ('mongoose');

const BlogSchema = mongoose.Schema({
    titulo: {
        type: String, 
        required: true,
    },
    subtitulo: {
        type: String, 
        required: true,
    },
    texto: {
        type: String, 
        required: true,
    },
})

module.exports = mongoose.model('Blog', BlogSchema);
