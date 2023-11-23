//Rutas para comentario
const http = require('node:http') //protocolo HTTP
const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

//api/comentarios
router.post('/', comentarioController.comentario);
router.get('/', comentarioController.mostrarComentario);
router.put('/:id', comentarioController.actualizarComentario);
router.get('/:id', comentarioController.obtenerComentario);//mostrar solo 1
router.delete('/:id', comentarioController.eliminarComentario);

module.exports = router;