import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["login-container"]}>
      <Typography variant="h3" className={styles["login-title"]} gutterBottom>
        Login to Eduverse
      </Typography>

      <Box className={styles["login-options"]}>
        <Button
          className={styles["option-box"]}
          onClick={() => navigate("/login/student")}
        >
          <Typography className={styles["option-text"]}>Student</Typography>
        </Button>
        <Button
          className={styles["option-box"]}
          onClick={() => navigate("/login/teacher")}
        >
          <Typography className={styles["option-text"]}>Teacher</Typography>
        </Button>
      </Box>

      {/* Register Button */}
      <Button
        className={styles["option-box"]}
        onClick={() => navigate("/register")}
      >
        <Typography className={styles["option-text"]}>Register</Typography>
      </Button>
    </div>
  );
};

export default Login;
