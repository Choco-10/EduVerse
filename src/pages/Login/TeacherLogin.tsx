import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
      console.log("Teacher Email:", email);
      console.log("Teacher Password:", password);

      // Navigate to Teacher Dashboard
      navigate("/Dashboard/Teacher");
  };

  return (
    <div className={styles["login-container"]}>

      <Typography variant="h4" className={styles["login-title"]} gutterBottom>
        Teacher Login
      </Typography>

      <form className={styles["login-form"]} noValidate autoComplete="off">
        <TextField label="Email" type="email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
        
        <TextField label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/> 
        
        <Button variant="contained" className={styles["login-button"]} onClick={handleLogin}>
          Login
        </Button>

      </form>

    </div>
  );
};

export default TeacherLogin;
