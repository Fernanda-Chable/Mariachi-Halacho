const mongoose = require ('mongoose');

const BlogSchema = mongoose.Schema({
    content: {
        type: String, 
        required: true,
    },
    document: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
})

module.exports = mongoose.model('Blog', BlogSchema);