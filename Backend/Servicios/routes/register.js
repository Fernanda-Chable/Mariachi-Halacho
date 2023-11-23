const router = require('express').Router();
//Exportar los models
const User = require('../models/User');
// constraseña
const bcrypt = require('bcrypt');
//Json Web Token
const jwt = require('jsonwebtoken');

const Joi = require('@hapi/joi');

//Para hacer las validaciones para el register
const schemaRegister = Joi.object({
    name: Joi.string().min(4).max(255).required(),
    email: Joi.string().min(8).max(255).required().email(),
    password: Joi.string().min(8).max(255).required()
})


//La parte de registros 
router.post('/', async (req, res) => {

    //Validaciones de usuario
    const { error } =schemaRegister.validate(req.body)
    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
    }

    //Validar email único
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
    return res.status(400).json(
        {error:true, mensaje: 'Email ya registrado'}
    )
    }

     // hash contraseña
     const salt = await bcrypt.genSalt(10);
     const password = await bcrypt.hash(req.body.password, salt);
 

    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: password
    })

    try {
        const userDB = await user.save();
        res.json({
            error: null,
            data: userDB
        })

    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;

