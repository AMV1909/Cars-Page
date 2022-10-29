import crypto from 'crypto';
import empleadoSchema from "../models/Empleado.js";

const HelloWorld = (req, res) => {
    res.send("Hello World");
};

const getEmpleados = async (req, res) => {
    await empleadoSchema.find()
        .then((data) => res.status(200).json(data))
        .catch(err => res.status(400).json("Error: " + err));
};

const getEmpleado = async (req, res) => {
    await empleadoSchema.findOne(req.params.document)
        .then((data) => res.status(200).json(data))
        .catch(err => res.status(400).json("Error: " + err));
};

const createEmpleado = async (req, res) => {
    req.body.password = crypto.createHash('sha256').update(req.body.password).digest('base64');
    const empleado = new empleadoSchema(req.body);

    await empleado.save()
        .then(() => res.status(200).json("Empleado creado"))
        .catch(err => res.status(400).json("Error: " + err));
};

const updateEmpleado = async (req, res) => {
    await empleadoSchema.findOneAndUpdate(req.params.document, req.body)
        .then(() => res.status(200).json("Empleado actualizado"))
        .catch(err => res.status(400).json("Error: " + err));
};

const deleteEmpleado = async (req, res) => {
    await empleadoSchema.findOneAndRemove(req.params.document)
        .then(() => res.status(200).json("Empleado eliminado"))
        .catch(err => res.status(400).json("Error: " + err));
};

export { HelloWorld, getEmpleados, getEmpleado, createEmpleado, updateEmpleado, deleteEmpleado };