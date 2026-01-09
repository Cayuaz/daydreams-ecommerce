import { Router } from "express";
import { UserRepository } from "../repositories/UserRepository.js";
import { RegisterUseCase } from "../useCases/registerUseCase.js";
import {
  LoginController,
  RegisterController,
} from "../controllers/AuthController.js";
import { LoginUseCase } from "../useCases/loginUseCase.js";

const router = Router();

//User repository
const userRepository = new UserRepository();

//Auth routes setup

//Register
const registerUseCase = new RegisterUseCase(userRepository);
const registerController = new RegisterController(registerUseCase);

//Login
const loginUseCase = new LoginUseCase(userRepository);
const loginController = new LoginController(loginUseCase);

router.post("/register", registerController.handle);
router.post("/login", loginController.handle);

export default router;
