// import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { globalErrors } from "./middlewares/errors.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" with {type: "json"}

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use(globalErrors);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export { app };
