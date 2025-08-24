import { Request, Response } from "express";
import prisma from "../db";
import bcrypt from "bcrypt";

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

export const addStudentToClass = async (req: Request, res: Response): Promise<void> => {
  try {
    const { roll_no } = req.body;
    const { classId } = req.params;
    const teacherId = Number(req.user?.id);

    if (!roll_no || !classId) {
      res.status(400).json({ error: "Roll number and classId are required" });
      return;
    }

    const classExists = await prisma.class.findFirst({
      where: { id: Number(classId), class_teacher_id: teacherId },
    });

    if (!classExists) {
      res.status(403).json({ error: "You are not authorized to modify this class" });
      return;
    }

    const student = await prisma.user.findUnique({
      where: { roll_no },
    });

    if (!student || student.role !== "STUDENT") {
      res.status(404).json({ error: "Student with this roll number not found" });
      return;
    }

    // Add student to class
    await prisma.user.update({
      where: { id: student.id },
      data: {
        student_classes: {
          connect: [{ id: Number(classId) }],
        },
      },
    });

    res.json({ message: "Student added to class successfully" });
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



export const addSchedule = async (req: Request, res: Response): Promise<void> => {
  const { class_id, subject_id } = req.body;
  const teacher_id = req.user?.id;

  if (!class_id || !subject_id || !teacher_id) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  try {
    const schedule = await prisma.weeklySchedule.create({
      data: {
        class_id,
        teacher_id,
        subject_id,
      },
    });

    res.status(201).json({ message: "Schedule created", schedule });
  } catch (err) {
    console.error("Error creating schedule:", err);
    res.status(500).json({ error: "Failed to create schedule" });
  }
};