// routes/studentRoutes.ts
import express from 'express';
import { Router } from 'express';
const router = Router();

// Example route for getting all students (you can modify as needed)
router.get('/', (req, res) => {
  res.send("Student Controller - Get All Students");
});

// Example route for adding a new student (this could be added if needed in the future)
router.post('/', (req, res) => {
  res.send("Student Controller - Add New Student");
});

// You can add more student-specific routes here

export default router;
