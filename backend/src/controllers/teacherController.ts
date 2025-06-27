import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// ✅ GET all classes for the logged-in teacher
export const getTeacherClasses = async (req: Request, res: Response): Promise<void> => {
  try {
    const teacherId = Number(req.user?.id);

    const classes = await prisma.class.findMany({
      where: { class_teacher_id: teacherId },
      include: { students: true },
    });

    const response = classes.map((cls) => ({
      id: cls.id,
      name: cls.name,
      studentCount: cls.students.length,
    }));

    res.json({ classes: response });
  } catch (error) {
    console.error("Error fetching classes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ ADD a new class
export const addClass = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const teacherId = Number(req.user?.id);

    const newClass = await prisma.class.create({
      data: {
        name,
        class_teacher_id: teacherId,
      },
    });

    res.status(201).json({
      message: "Class created",
      class: {
        id: newClass.id,
        name: newClass.name,
        studentCount: 0, // Initially no students
      },
    });
  } catch (error) {
    console.error("Error adding class:", error);
    res.status(500).json({ error: "Failed to create class" });
  }
};


// ✅ DELETE a class
export const deleteClass = async (req: Request, res: Response): Promise<void> => {
  try {
    const { classId } = req.params;
    const teacherId = Number(req.user?.id);

    const existing = await prisma.class.findUnique({ where: { id: Number(classId) } });

    if (!existing || existing.class_teacher_id !== teacherId) {
      res.status(403).json({ error: "Unauthorized or class not found" });
      return;
    }

    await prisma.class.delete({ where: { id: Number(classId) } });
    res.json({ message: "Class deleted" });
  } catch (error) {
    console.error("Error deleting class:", error);
    res.status(500).json({ error: "Failed to delete class" });
  }
};

// ✅ ADD student to class
export const addStudentToClass = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, roll_no, classId, institute } = req.body;
    const teacherId = Number(req.user?.id);

    if (!institute) {
      res.status(400).json({ error: "Institute is required" });
      return;
    }

    const classExists = await prisma.class.findFirst({
      where: { id: classId, class_teacher_id: teacherId },
    });

    if (!classExists) {
      res.status(403).json({ error: "You are not authorized to add students to this class" });
      return;
    }

    const email = `${roll_no}@${institute}.edu`;
    const defaultPassword = await bcrypt.hash("user@123", 10);

    const student = await prisma.user.create({
      data: {
        name,
        email,
        password: defaultPassword,
        roll_no,
        role: "Student",
        student_classes: {
          connect: { id: classId },
        },
      },
    });

    res.json({ message: "Student added successfully", student });
  } catch (error: any) {
    console.error("Error adding student:", error);
    res.status(400).json({ error: error.message || "Failed to add student" });
  }
};

export const getClassDetails = async (req: Request, res: Response): Promise<void> => {
  const teacherId = req.user!.id;
  const id = Number(req.params.classId);

  const cls = await prisma.class.findFirst({
    where: { id, class_teacher_id: teacherId },
    include: { students: true }
  });

  if (!cls) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json({ class: { id: cls.id, name: cls.name }, students: cls.students });
};
