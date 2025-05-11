import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes"; // Import the routes folder, not just auth.ts

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes); // Use the centralized routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
