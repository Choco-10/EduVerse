import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../db";

export const createTeacher = async (req: Request, res: Response): Promise<void> => {
  const { name, roll_no } = req.body;

  if (!name || !roll_no) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  try {
    const institute = await prisma.institute.findFirst();
    if (!institute) {
      res.status(400).json({ error: "Institute not set up yet" });
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: { roll_no },
    });

    if (existingUser) {
      res.status(409).json({ error: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash("user@123", 10);

    const user = await prisma.user.create({
      data: {
        name,
        roll_no,
        email: `${roll_no}@${institute.name}.eduverse.com`,
        password: hashedPassword,
        role: "TEACHER",
      },
    });

    res.status(201).json({ message: "Teacher created", user });
  } catch (err) {
    console.error("Create Teacher Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
