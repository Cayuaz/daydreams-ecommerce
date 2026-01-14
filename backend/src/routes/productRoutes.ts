import { Router } from "express";
import { ProductRepository } from "../repositories/ProductRepository.js";
import { GetProductsUseCase } from "../useCases/getProductsUseCase.js";
import {
  GetFeaturedProductsController,
  GetProductController,
  GetProductsController,
} from "../controllers/ProductController.js";
import { GetProductUseCase } from "../useCases/getProductUseCase.js";
import { GetFeaturedProductsUseCase } from "../useCases/getFeaturedProductsUseCase.js";

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

//Get featured products
const getFeaturedProducts = new GetFeaturedProductsUseCase(repository);
const getFeaturedProductsController = new GetFeaturedProductsController(
  getFeaturedProducts
);

router.get("/", getProductsController.handle);
router.get("/featured", getFeaturedProductsController.handle);
router.get("/:id", getProductController.handle);

export default router;
