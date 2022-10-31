import { Router } from "express";
import { formVehiculos, formAddVehiculo, formEditVehiculo } from "../controllers/form.vehiculos.controller.js";
import { verifyToken } from "../jwt/jwt.js";

const router = Router();

router.get("/form/vehiculos", verifyToken, formVehiculos);
router.get("/form/vehiculos/add", verifyToken, formAddVehiculo);
router.get("/form/vehiculos/:id", verifyToken, formEditVehiculo);

export default router;