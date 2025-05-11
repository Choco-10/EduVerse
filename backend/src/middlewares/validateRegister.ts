import { Request, Response, NextFunction } from "express";

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, email, password, roll_no, role } = req.body;

  if (!name || !email || !password || !roll_no || !role) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  if (password.length < 6) {
    res.status(400).json({ error: "Password must be at least 6 characters" });
    return;
  }

  if (!["Student", "Teacher"].includes(role)) {
    res.status(400).json({ error: "Invalid role selected" });
    return;
  }

  next(); // ✅ Ensures all paths lead to next() or return a response
};
