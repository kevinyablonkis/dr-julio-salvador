import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/registrar", validateSchema(registerSchema), register);

router.post("/iniciar-sesion", validateSchema(loginSchema), login);

router.post("/cerrar-sesion", logout);

router.get("/perfil", authRequired, profile);

router.get("/verify", verifyToken, profile);

export default router;
