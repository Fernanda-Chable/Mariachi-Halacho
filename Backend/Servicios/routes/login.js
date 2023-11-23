const router = require('express').Router();
//Exportar los models
const User = require('../models/User');
// constraseña
const bcrypt = require('bcrypt');
//Json Web Token
const jwt = require('jsonwebtoken');

const Joi = require('@hapi/joi');


//Para hacer las validaciones para el Login
const schemaLogin = Joi.object({
    email: Joi.string().min(8).max(255).required().email(),
    password: Joi.string().min(8).max(255).required()
})

//La parte del login
router.post('/', async (req, res) => {
    //Validaciones de usuario
    const { error } =schemaLogin.validate(req.body)
    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
    }

   //Validar usuario existe
   const user = await User.findOne({ email: req.body.email });
   if (!user) return res.status(400).json({ error:true, mensaje: 'Email no registrado' });

   //Validar contraseña
   const validPassword = await bcrypt.compare(req.body.password, user.password);
   if (!validPassword) return res.status(400).json({ error:true, mensaje: 'contraseña no válida' })

   // create token
   const token = jwt.sign({
       name: user.name,
       id: user._id
   }, process.env.TOKEN_SECRET)
   

   //Verificacion que todo este bien
   res.header('auth-token', token).json({
       error: null,
       data: {token}
   })
})

module.exports = router;
