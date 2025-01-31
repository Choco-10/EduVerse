import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { checkConnection } from './db';
import authRoutes from './routes/authRoutes'; // Import authRoutes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes); // Register authRoutes at '/api/auth'

app.get('/', (req, res) => {
  res.send('Welcome to the EduVerse API');
});

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await checkConnection(); // Check database connection during startup
});
