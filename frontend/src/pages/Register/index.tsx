import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const navigate = useNavigate();

  const handleRegisterClick = (role: 'student' | 'teacher') => {
    navigate(`/register/${role}`);
  };

  return (
    <div className={styles['register-container']}>
      <Typography variant="h4" className={styles['register-title']} gutterBottom>
        Register as
      </Typography>

      <div className={styles['button-container']}>
        <Button
          variant="contained"
          color="primary"
          className={styles['register-button']}
          onClick={() => handleRegisterClick('student')}
        >
          Student
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={styles['register-button']}
          onClick={() => handleRegisterClick('teacher')}
        >
          Teacher
        </Button>
      </div>
    </div>
  );
};

export default Register;
