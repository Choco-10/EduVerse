import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import styles from "./UserLogin.module.css";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", { ...formData, role: "STUDENT" });
      localStorage.setItem("token", response.data.token);
      //alert(response.data.message);
      navigate("/student/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className={styles["login-container"]}>
      <Typography variant="h3" className={styles["login-title"]} gutterBottom>
        Student Login
      </Typography>

      {error && <Typography className={styles["error-message"]}>{error}</Typography>}

      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth />
        <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required fullWidth />

        <Button type="submit" className={styles["submit-button"]} variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default StudentLogin;
