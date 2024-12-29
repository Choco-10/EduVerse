import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Student Controller - Get All Students");
});

router.post("/", (req, res) => {
  res.send("Student Controller - Add New Student");
});

export default router;
