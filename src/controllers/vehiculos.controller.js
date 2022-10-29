import vehiculoSchema from "../models/Vehiculo.js";

const getVehiculos = async (req, res) => {
    await vehiculoSchema.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json("Error: " + err));
};

const getVehiculo = async (req, res) => {
    await vehiculoSchema.findOne(req.params.seriesNumber)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json("Error: " + err));
};

const createVehiculo = async (req, res) => {
    const vehiculo = new vehiculoSchema(req.body);
    await vehiculo.save()
        .then(() => res.status(200).json("Vehiculo creado"))
        .catch(err => res.status(400).json("Error: " + err));
};

const updateVehiculo = async (req, res) => {
    await vehiculoSchema.findOneAndUpdate(req.params.seriesNumber, req.body)
        .then(() => res.status(200).json("Vehiculo actualizado"))
        .catch(err => res.status(400).json("Error: " + err));
};

const deleteVehiculo = async (req, res) => {
    await vehiculoSchema.findOneAndRemove(req.params.seriesNumber)
        .then(() => res.status(200).json("Vehiculo eliminado"))
        .catch(err => res.status(400).json("Error: " + err));
};

export { getVehiculos, getVehiculo, createVehiculo, updateVehiculo, deleteVehiculo };