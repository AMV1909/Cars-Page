import { Router } from "express";
import { createVehiculo, getVehiculos, getVehiculo, deleteVehiculo, updateVehiculo } from "../controllers/vehiculos.controller.js";
import { verifyToken } from "../jwt/jwt.js";

const router = Router();

router.get("/vehiculos", getVehiculos);
router.get("/vehiculos/:id", getVehiculo);
router.post("/vehiculos", verifyToken, createVehiculo);
router.put("/vehiculos/:id", verifyToken, updateVehiculo);
router.delete("/vehiculos/:id", verifyToken, deleteVehiculo);

export default router;