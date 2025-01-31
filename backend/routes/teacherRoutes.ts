// routes/teacherRoutes.ts
import express from 'express';
import { Router } from 'express';
const router = Router();

// Example route for getting all teachers (you can modify as needed)
router.get('/', (req, res) => {
  res.send("Teacher Controller - Get All Teachers");
});

// Example route for adding a new teacher (this could be added if needed in the future)
router.post('/', (req, res) => {
  res.send("Teacher Controller - Add New Teacher");
});

// You can add more teacher-specific routes here

export default router;
