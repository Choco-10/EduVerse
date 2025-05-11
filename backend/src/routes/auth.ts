import express from "express";
import { loginUser, registerUser } from "../controllers/authController";
import { validateRegister } from "../middlewares/validateRegister";
import { validateLogin } from "../middlewares/validateLogin";

const router = express.Router();

// Route for user registration
router.post("/register", validateRegister, registerUser);

// Route for user login
router.post("/login", validateLogin, loginUser);

export default router;
