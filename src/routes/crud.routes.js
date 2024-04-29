import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import {
  createBlogSchema,
  createArticleSchema,
} from "../schemas/crud.schema.js";
import {
  createBlog,
  deleteBlog,
  updateBlog,
  createArticle,
  deleteArticle,
  updateArticle,
} from "../controllers/crud.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post(
  "/crear-articulo",
  authRequired,
  validateSchema(createArticleSchema),
  createArticle
);

router.delete("/eliminar-articulo/:id", authRequired, deleteArticle);

router.put("/modificar-articulo/:id", authRequired, updateArticle);

router.post(
  "/crear-blog",
  authRequired,
  validateSchema(createBlogSchema),
  createBlog
);

router.delete("/eliminar-blog/:id", authRequired, deleteBlog);

router.put("/modificar-blog/:id", authRequired, updateBlog);

export default router;
