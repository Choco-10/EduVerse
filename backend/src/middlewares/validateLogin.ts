import { Request, Response, NextFunction } from "express";

export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    res.status(400).json({ error: "Email, password, and role are required" });
    return;
  }

  if (!["Student", "Teacher", "Admin"].includes(role)) {
    res.status(400).json({ error: "Invalid role" });
    return;
  }

  next();
};
