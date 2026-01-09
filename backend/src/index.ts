import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

export { app };
