import express from "express";
import authRoutes from "./auth";
import teacherRoutes from "./teacherRoutes";

const router = express.Router();

router.use("/auth", authRoutes); // Change the route to /auth
router.use("/teacher", teacherRoutes); 

export default router;
