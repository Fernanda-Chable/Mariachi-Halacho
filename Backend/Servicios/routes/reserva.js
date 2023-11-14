// Rutas para reservas
const http = require('node:http') //protocolo HTTP
const express = require('express');
const router = express.Router();
const reservaContoller = require('../controllers/reservaController');


// api/reservas
router.post('/', reservaContoller.crearReserva);
router.get('/', reservaContoller.obtenerReservas);
router.put('/:id', reservaContoller.actualizarReserva);
router.get('/:id', reservaContoller.obtenerReserva); //Para mostrar uno 
router.delete('/:id', reservaContoller.eliminarReserva);

module.exports = router;