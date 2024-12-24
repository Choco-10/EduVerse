import pkg from 'pg';  
import dotenv from 'dotenv'; 

dotenv.config();

const { Pool } = pkg;


const pool = new Pool({
  user: process.env.DB_USER,        
  host: process.env.DB_HOST,        
  database: process.env.DB_NAME,    
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,        
});

const checkConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');  // Simple query to check connection
    console.log('Connection successful:', res.rows[0]);
  } catch (err) {
    console.error('Error connecting to the database', err);
  } finally {
    await pool.end();  // Close the pool after the query
  }
};

export { checkConnection };
