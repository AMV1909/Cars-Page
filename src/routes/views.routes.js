import { Router } from "express";
import { index, login, cotizar, catalogo, home, inventario } from "../controllers/views.controller.js";
import { verifyToken } from "../jwt/jwt.js";

const router = Router();

router.get("/", index);
router.get("/login", login);
router.get("/cotizar", cotizar);
router.get("/catalogo", catalogo);
router.get("/home", verifyToken, home);
router.get("/inventario", verifyToken, inventario);

export default router;