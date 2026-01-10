import { Router } from "express";
import { ProductRepository } from "../repositories/ProductRepository.js";
import { GetProductsUseCase } from "../useCases/getProductsUseCase.js";
import {
  GetProductController,
  GetProductsController,
} from "../controllers/ProductController.js";
import { GetProductUseCase } from "../useCases/getProductUseCase.js";

const router = Router();

// Product repository
const repository = new ProductRepository();

// Product routes setup

//Get products
const getProductsUseCase = new GetProductsUseCase(repository);
const getProductsController = new GetProductsController(getProductsUseCase);

//Get product
const getProductUseCase = new GetProductUseCase(repository);
const getProductController = new GetProductController(getProductUseCase);

router.get("/", getProductsController.handle);
router.get("/:id", getProductController.handle);

export default router;
