import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req: Request, res: Response) => res.send("Backend is running!"));

app.listen(4000, () => console.log("Backend running on http://localhost:4000"));
