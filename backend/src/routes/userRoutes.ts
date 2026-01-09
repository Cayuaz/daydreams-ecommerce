import { Router } from "express";
import { GetUserController } from "../controllers/UserController.js";
import { GetUserUseCase } from "../useCases/getUserUseCase.js";
import { UserRepository } from "../repositories/UserRepository.js";

//User repository
const userRepository = new UserRepository();

//User routes setup

//Get user
const getUserUseCase = new GetUserUseCase(userRepository);
const getUserController = new GetUserController(getUserUseCase);

const router = Router();

router.get("/:id", getUserController.handle);

export default router;
