import vehiculoSchema from "../models/Vehiculo.js";
import jwt from "jsonwebtoken";

const getVehiculos = async (req, res) => {
    await vehiculoSchema.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json("Error: " + err));
};

const getVehiculo = async (req, res) => {
    await vehiculoSchema.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json("Error: " + err));
};

const createVehiculo = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
        if (!err) {
            const vehiculo = new vehiculoSchema(req.body);
            await vehiculo.save()
                .then(() => res.status(200).json({ message: "Vehiculo creado" }))
                .catch(err => res.status(400).json("Error: " + err));
        } else {
            res.status(403).json(err);
        }
    });
};

const updateVehiculo = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
        if (!err) {
            await vehiculoSchema.findByIdAndUpdate(req.params.id, req.body)
                .then(() => res.status(200).json({ message: "Vehiculo actualizado" }))
                .catch(err => res.status(400).json("Error: " + err));
        } else {
            res.status(403).json("Token invalido");
        }
    });
};

const deleteVehiculo = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
        if (!err) {
            await vehiculoSchema.findByIdAndDelete(req.params.id)
                .then(() => res.status(200).json({ message: "Vehiculo eliminado" }))
                .catch(err => res.status(400).json("Error: " + err));
        } else {
            res.status(403).json("Token invalido");
        }
    });
};

export { getVehiculos, getVehiculo, createVehiculo, updateVehiculo, deleteVehiculo };