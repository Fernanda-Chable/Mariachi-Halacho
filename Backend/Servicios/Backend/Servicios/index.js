const express = require ('express');
const conectarDB = require('./config/db');
const cors = require("cors");
const bodyparser = require('body-parser');

// Creamos el servidor
const app = express();

//Capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conectamos a la BD
conectarDB();

//Habilitar CORS para todas las solicitudes
app.use(cors())

//Import routes
app.use(express.json());
app.use('/api/reservas', require('./routes/reserva'));
app.use('/api/comentarios', require('./routes/comentario'));
app.use('/api/user', require('./routes/auth'));


//Iniciar server
app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})