import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getBlog,
  getArticle,
} from "../controllers/getPublication.controller.js";

const router = Router();

router.get("/obtener-blogs", authRequired, getBlog);

router.get("/obtener-articulos", authRequired, getArticle);

export default router;
