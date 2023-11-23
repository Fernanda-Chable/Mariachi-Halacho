const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'MySecretApp';

//Para la parte del registro o signIn en el frontend
exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'El Email ya existe' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: newUser.id }, TOKEN_SECRET, {
            expiresIn,
        });

        const dataUser = {
            name: newUser.name,
            email: newUser.email,
            accessToken,
            expiresIn,
        };

        res.json({ dataUser });
    } catch (error) {
        res.status(500).json({ message: 'Error del Servidor' });
    }
};


//Para la parte de login 
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(409).json({ message: 'Algo está mal' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: user.id }, TOKEN_SECRET, {
                expiresIn,
            });

            const dataUser = {
                name: user.name,
                email: user.email,
                accessToken,
                expiresIn,
            };

            res.json({ dataUser });
        } else {
            res.status(409).json({ message: 'Algo está mal' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error del Servidor' });
    }
};