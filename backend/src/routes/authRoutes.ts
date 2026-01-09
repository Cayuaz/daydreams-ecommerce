import { Router } from "express";
import { UserRepository } from "../repositories/UserRepository.js";
import { RegisterUseCase } from "../useCases/registerUseCase.js";
import { RegisterController } from "../controllers/AuthController.js";

const router = Router();

//User repository
const userRepository = new UserRepository();

//Auth routes setup

//Register user
const registerUseCase = new RegisterUseCase(userRepository);
const registerController = new RegisterController(registerUseCase);

router.post("/register", registerController.handle);

export default router;
