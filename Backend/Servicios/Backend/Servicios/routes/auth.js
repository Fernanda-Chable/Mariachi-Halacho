const router = require('express').Router();
// constraseña
const bcrypt = require('bcrypt');

//Exportar los models
const User = require('../models/User');

//Para hacer las validaciones 
const Joi = require('@hapi/joi');
const schemaRegister = Joi.object({
    name: Joi.string().min(4).max(255).required(),
    email: Joi.string().min(8).max(255).required().email(),
    password: Joi.string().min(8).max(255).required()
})

router.post('/register', async (req, res) => {

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


    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
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