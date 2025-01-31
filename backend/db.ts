import { Pool } from 'pg';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

// Initialize Prisma Client
export const prisma = new PrismaClient();

// Define the PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER as string,
  host: process.env.DB_HOST as string,
  database: process.env.DB_NAME as string,
  password: process.env.DB_PASSWORD as string,
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

// Function to check the database connection
const checkConnection = async (): Promise<void> => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connection successful:', res.rows[0].now);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit the application if the database connection fails
  }
};

export { pool, checkConnection };
