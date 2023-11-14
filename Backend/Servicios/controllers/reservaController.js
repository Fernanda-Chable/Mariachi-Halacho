const Reserva = require("../models/Reserva");

//Para Crear 
exports.crearReserva = async (req, res) => {
    //console.log('desde crear reserva');
    try {
        let reserva;

        //Creamos nuestra reserva
        reserva = new Reserva(req.body);

        await reserva.save();
        res.send(reserva);

    } catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

//Para Get --> para obtener o ver
exports.obtenerReservas = async (req, res) => {

    try {

        const reserva = await Reserva.find();
        res.json(reserva)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

//Para Update --> para actualizar

exports.actualizarReserva = async (req, res) =>{
    
    try {
        const { nombre, apellidos, telefono, localidad, direccion, fecha, hora, metodoPago } = req.body;
        let reserva = await Reserva.findById(req.params.id);

        if(!reserva) {
            res.status(404).json({ msg: 'No existe ninguna reserva' })
        }

        reserva.nombre = nombre;
        reserva.apellidos = apellidos;
        reserva.telefono = telefono;
        reserva.localidad = localidad;
        reserva.direccion = direccion;
        reserva.fecha = fecha;
        reserva.hora = hora;
        reserva.metodoPago= metodoPago;

        reserva = await Reserva.findOneAndUpdate({ _id: req.params.id },reserva, { new: true} )
        res.json(reserva);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Para el Get --> Mostrar un producto

exports.obtenerReserva = async (req, res) => {

    try {
        let reserva = await Reserva.findById(req.params.id);

        if(!reserva) {
            res.status(404).json({ msg: 'No existe la reserva' })
        }
       
        res.json(reserva);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


//Para Delete --> para eliminar 

exports.eliminarReserva = async (req, res) => {
    try {
        let reserva = await Reserva.findById(req.params.id);

        if (!reserva) {
            return res.status(404).json({ msg: 'No existe la reserva' });
        }
       
        await Reserva.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'Reserva eliminada con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}