import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Teacher Controller - Get All Teachers");
});

router.post("/", (req, res) => {
  res.send("Teacher Controller - Add New Teacher");
});

export default router;
