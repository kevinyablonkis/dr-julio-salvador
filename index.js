import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./db.js";

import authRoutes from "./src/routes/auth.routes.js";
import crudArticleRoutes from "./src/routes/crudArticle.routes.js";
import crudBlogRoutes from "./src/routes/crudBlog.routes.js";
import getPublicationRoutes from "./src/routes/getPublication.routes.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api/blog", crudBlogRoutes);
app.use("/api/article", crudArticleRoutes);
app.use("/api", getPublicationRoutes);

connectDB();

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server listening on port http://localhost:3000");
});
