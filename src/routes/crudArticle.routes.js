import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createArticleSchema } from "../schemas/crud.schema.js";
import {
  createArticle,
  deleteArticle,
  updateArticle,
} from "../controllers/crudArticle.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post(
  "/",
  authRequired,
  validateSchema(createArticleSchema),
  createArticle
);

router.delete("/:id", authRequired, deleteArticle);

router.patch("/:id", authRequired, updateArticle);

export default router;
