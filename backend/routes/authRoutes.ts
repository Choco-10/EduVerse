import express from 'express';
import { registerStudent, registerTeacher } from '../controllers/authController';

const router = express.Router();

// Routes for registration
router.post('/register/student', registerStudent);
router.post('/register/teacher', registerTeacher);

export default router;
