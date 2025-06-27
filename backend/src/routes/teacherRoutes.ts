import express from "express";
import { getTeacherClasses, addClass, deleteClass, addStudentToClass, getClassDetails } from "../controllers/teacherController";
import { authenticate } from "../middlewares/authenticate";

const router = express.Router();

// Protected route - get all classes for a teacher
router.get("/classes", authenticate, getTeacherClasses);

router.post("/classes", authenticate, addClass);

router.delete("/classes/:classId", authenticate, deleteClass);

router.post("/classes/:classId/add-student", authenticate, addStudentToClass);

router.get("/classes/:classId", authenticate, getClassDetails);


export default router;
