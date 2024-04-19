import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./db.js";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);

connectDB();

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server listening on port http://localhost:3000");
});
