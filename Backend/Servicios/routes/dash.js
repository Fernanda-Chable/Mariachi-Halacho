const express = require('express');
const {vistaPrincial} = require('../controllers/dashController');
const router = express.Router();


router.get('/', vistaPrincial);

module.exports = {routes: router};