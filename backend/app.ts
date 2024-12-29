import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import studentController from "./controllers/studentController";
import teacherController from "./controllers/teacherController";

// Load environment variables
dotenv.config();

// Create an instance of Express
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Test Route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the EduVerse Backend!");
});

// Routes
app.use("/students", studentController);
app.use("/teachers", teacherController);

// Global Error Handling Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
