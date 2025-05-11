import express from "express";
import authRoutes from "./auth";

const router = express.Router();

router.use("/auth", authRoutes); // Change the route to /auth

export default router;
