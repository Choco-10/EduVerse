import { Request, Response } from "express";
import prisma from "../db";


export const setInstitute = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "Institute name is required" });
    return;
  }

  const existing = await prisma.institute.findFirst();
  if (existing) {
    res.status(400).json({ message: "Institute already exists" });
    return;
  }

  const institute = await prisma.institute.create({
    data: { name },
  });

  res.status(201).json(institute);
  return;
};

export const getInstitute = async (_req: Request, res: Response): Promise<void> => {
  const institute = await prisma.institute.findFirst();

  if (!institute) {
    res.status(404).json({ message: "Institute not set" });
    return;
  }

  res.json(institute);
  return;
};
