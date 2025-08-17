import express from "express";
import authRoutes from "./auth";
import teacherRoutes from "./teacherRoutes";
import instituteRoutes from "./instituteRoutes";
import adminRoutes from "./adminRoutes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/institute", instituteRoutes);
router.use("/admin", adminRoutes);
router.use("/teacher", teacherRoutes); 

export default router;
