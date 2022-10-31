import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import empleadoSchema from '../models/Empleado.js';

const login = async (req, res) => {
    console.log(req.body);

    const { email } = req.body;
    const password = crypto.createHash('sha256').update(req.body.password).digest('base64');

    console.log(email, password);

    await empleadoSchema
        .findOne({ email, password })
        .then((data) => {
            if (data) {
                jwt.sign({ empleado: data }, process.env.SECRET_KEY, (err, token) => {
                    if (!err) {
                        res.status(200).cookie('authorization', `Bearer ${token}`, { httpOnly: true }).json({ message: 'Login successful' });
                    } else {
                        res.status(400).json("Error: " + err);
                    }
                });
            } else {
                res.json("Usuario o contraseña incorrectos");
            }
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

const logout = (req, res) => {
    res.clearCookie('authorization').redirect('/');
};

const auth = (req, res) => {
    if (req.cookies.authorization) {
        res.redirect('/home');
    } else {
        res.redirect('/login');
    }
};

export { login, logout, auth };