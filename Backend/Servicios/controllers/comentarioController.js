const Comentario = require("../models/Comentario");

exports.comentario = async (req, res) =>{
     try {
        let comentario

        //creamos el comentario
        comentario = new Comentario (req.body);

        await comentario.save();
        res.send(comentario)
        
     } catch (error) {
        console.log(error);
        res.status(500).send('Algo salio mal')
     }
}

exports.mostrarComentario = async (req, res) =>{
   try {
      const comentario = await Comentario.find();
      res.json(comentario)
      
   } catch (error) {
      console.log(error);
        res.status(500).send('Algo salio mal')
   }
}

exports.actualizarComentario = async (req, res) =>{
   try {
      const { usuario } = req.body;
      let comentario = await Comentario.findById(req.params.id);

      if(!comentario){
         res.status(404).json ({ msg: 'NO EXISTE EL COMENTARIO'})
      }

      comentario.usuario = usuario;

      comentario = await Comentario.findOneAndUpdate({ _id: req.params.id},comentario,{new: true} )
      const respuestaLegible = JSON.stringify(comentario, null, 2);
      console.log(respuestaLegible);

    res.json(comentario);
      
   } catch (error) {
      console.log(error);
        res.status(500).send('Algo salio mal')
   }
}

exports.obtenerComentario = async (req, res) =>{
   try {
      let comentario = await Comentario.findById(req.params.id);

      if(!comentario){
         res.status(404).json ({ msg: 'NO EXISTE EL COMENTARIO'})
      }

    res.json(comentario);
      
   } catch (error) {
      console.log(error);
        res.status(500).send('Algo salio mal')
   }
}

exports.eliminarComentario = async (req, res) =>{
   try {
      let comentario = await Comentario.findById(req.params.id);

      if(!comentario){
         res.status(404).json ({ msg: 'NO EXISTE EL COMENTARIO'})
      }
      await Comentario.findOneAndRemove({_id: req.params.id})
      res.json({msg: 'Comentario Eliminado'});
      
   } catch (error) {
      console.log(error);
        res.status(500).send('Algo salio mal')
   }
}