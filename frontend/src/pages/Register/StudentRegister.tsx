import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import styles from './RegisterForm.module.css';

const StudentRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rollNo, setRollNo] = useState(''); // Added rollNo field

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/auth/register/student', {
        name,
        email,
        password,
        rollNo,
      });
      alert(response.data.message);
    } catch (error) {
      // Narrow the type of error
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error || 'Failed to register student';
        alert(errorMessage);
      } else {
        alert('An unexpected error occurred');
      }
    }
  };
  

  return (
    <div className={styles['form-container']}>
      <Typography variant="h4" className={styles['form-title']} gutterBottom>
        Student Registration
      </Typography>

      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        fullWidth
        className={styles['form-input']}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        fullWidth
        className={styles['form-input']}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        fullWidth
        className={styles['form-input']}
      />
      <TextField
        label="Roll Number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        variant="outlined"
        fullWidth
        className={styles['form-input']}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleRegister}
        className={styles['form-button']}
      >
        Register
      </Button>
    </div>
  );
};

export default StudentRegister;
