import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../db';

// Register a student
export const registerStudent = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, rollNo } = req.body;

  if (!rollNo) {
    res.status(400).json({ error: 'Roll number is required' });
    return;
  }

  try {
    
    console.log('Received registration data:', req.body);
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        rollNo,
        role: 'Student',
      },
    });

    res.status(201).json({ message: 'Student registered successfully', student });
  } catch (error) {
    console.error('Error registering student:', error);
    res.status(500).json({ error: 'Failed to register student' });
  }
};

// Register a teacher
export const registerTeacher = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, rollNo } = req.body;

  if (!rollNo) {
    res.status(400).json({ error: 'Roll number is required' });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const teacher = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        rollNo,
        role: 'Teacher',
      },
    });

    res.status(201).json({ message: 'Teacher registered successfully', teacher });
  } catch (error) {
    console.error('Error registering teacher:', error);
    res.status(500).json({ error: 'Failed to register teacher' });
  }
};
