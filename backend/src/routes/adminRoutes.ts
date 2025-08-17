import express from "express";
import { createTeacher } from "../controllers/adminController";
import { authenticate } from "../middlewares/authenticate";

const router = express.Router();

router.post("/add-teacher", authenticate, createTeacher);

export default router;
