//Rutas para blog
const http = require('node:http') //protocolo HTTP
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

//api/blog
router.post('/', blogController.blog);
router.get('/', blogController.mostrarBlog);
router.put('/:id', blogController.actualizarBlog);
router.get('/:id', blogController.obtenerBlog); 
router.delete('/:id', blogController.eliminarBlog);

module.exports = router;
