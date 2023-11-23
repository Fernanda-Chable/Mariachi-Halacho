const express = require('express');
const router = express.Router();

const Users = require('../controllers/authController');


//Para realizar acciones como registrar o crear y inciar sesion
router.post('/', Users.createUser);
router.post('/login', Users.loginUser);

module.exports = router;