import { Router } from "express";
import { createVehiculo, getVehiculos, getVehiculo, deleteVehiculo, updateVehiculo } from "../controllers/vehiculos.controller.js";

const router = Router();

router.get("/vehiculos", getVehiculos);
router.get("/vehiculos/:id", getVehiculo);
router.post("/vehiculos", createVehiculo);
router.put("/vehiculos/:id", updateVehiculo);
router.delete("/vehiculos/:id", deleteVehiculo);

export default router;