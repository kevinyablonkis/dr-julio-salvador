import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createBlogSchema } from "../schemas/crud.schema.js";
import {
  createBlog,
  deleteBlog,
  updateBlog,
} from "../controllers/crudBlog.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post("/", authRequired, validateSchema(createBlogSchema), createBlog);

router.delete("/:id", authRequired, deleteBlog);

router.patch("/:id", authRequired, updateBlog);

export default router;
