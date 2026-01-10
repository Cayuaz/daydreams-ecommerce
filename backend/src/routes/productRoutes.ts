import { Router } from "express";
import { globalErrors } from "../middlewares/errors.js";
import { ProductRepository } from "../repositories/ProductRepository.js";
import { GetProductsUseCase } from "../useCases/getProductsUseCase.js";
import { GetProductsController } from "../controllers/ProductController.js";

const router = Router();

// Product repository
const repository = new ProductRepository();

// Product routes setup

const getProductsUseCase = new GetProductsUseCase(repository);
const getProductsController = new GetProductsController(getProductsUseCase);

router.get("/", globalErrors, getProductsController.handle);

export default router;
