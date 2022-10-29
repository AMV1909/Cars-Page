import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import empleadoSchema from '../models/Empleado.js';

const login = async (req, res) => {
    const { email } = req.body;
    const password = crypto.createHash('sha256').update(req.body.password).digest('base64');

    await empleadoSchema
        .findOne({ email, password })
        .then((data) => {
            if (data) {
                jwt.sign({ empleado: data }, process.env.SECRET_KEY, (err, token) => {
                    if (!err) {
                        res.status(200).json({ token });
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

export { login };