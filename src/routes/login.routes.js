import { Router } from "express";
import { login, logout, auth } from "../controllers/login.controller.js";

const router = Router();

router.post("/login", login);
router.get("/logout", logout);
router.get("/auth", auth);

export default router;