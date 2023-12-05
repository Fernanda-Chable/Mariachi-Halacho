const Blog = require("../models/Blog");

// Crea un nuevo blog 
exports.blogs= async (req, res) =>{
    try {
        let blog 

        //creamos blog
        blog = new Blog (req.body);

        await blog.save();
        res.send(blog)

    } catch (error) {
        console.log(error);
        res.status(500).send('No se puede cargar la informacion')
    }
}

exports.mostrarBlog = async (req, res) =>{
    try {
        const blog = await Blog.find();
        res.json(blog)

    } catch (error) {
        console.log(error);
        res.status(500).send('No se puede cargar la informacion')
    }
}

exports.actualizarBlog = async (req, res) =>{
    try {
        const { titulo, subtitulo, texto } = req.body;
        console.log(req.body);
        let blog = await Blog.findById(req.params.id);

        if(!blog){
            res.status(404).json ({ msg: 'NO EXISTE'})
        }

        blog.titulo = titulo;
        blog.subtitulo = subtitulo;
        blog.texto = texto;


        blog = await blog.findOneAndUpdate({ _id: req.params.id},comentario,{new: true} )
        res.json(blog);

    } catch (error) {
        console.log(error);
        res.status(500).send('Algo salio mal')
    }
}

exports.obtenerBlog = async (req, res) =>{
    try {
        let blog = await blog.findById(req.params.id);

        if(!blog){
            res.status(404).json ({ msg: 'No existe'})
        }

        res.json(blog);
    } catch (error) {
        console.log(error);
        res.status(500).send('Algo salio')
    }
}

exports.eliminarBlog = async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id);

        if(!blog) {
            return res.status(404).json({ msg: 'No existe' });
        }

        await Blog.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'Blog eliminado con exito'});
    } catch (eror) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

