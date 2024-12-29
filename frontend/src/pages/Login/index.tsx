import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['login-container']}>
      <Typography variant="h4" className={styles['login-title']} gutterBottom>
        Login to Eduverse
      </Typography>
      
      <div className={styles['login-options']}>
        <div className={styles['option-box']} onClick={() => navigate('/login/student')}>
          <span className={styles['option-text']}>Student</span>
        </div>
        <div className={styles['option-box']} onClick={() => navigate('/login/teacher')}>
          <span className={styles['option-text']}>Teacher</span>
        </div>
      </div>

      {/* Register Button */}
      <div className={styles["option-box"]} onClick={() => navigate("/register")}>
          <span className={styles["option-text"]}>Register</span>
        </div>
    </div>
  );
};

export default Login;
