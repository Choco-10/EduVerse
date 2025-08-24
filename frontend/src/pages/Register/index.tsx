import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roll_no: "",
    role: "",
  });

  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.role) {
      setError("Please select a role.");
      return;
    }

    setError(null); // Reset error state

    try {
      const response = await axios.post("/auth/register", formData);
      alert(response.data.message);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.error || "Registration failed. Please try again.");
    }
  };

  return (
    <div className={styles["register-container"]}>
      <Typography variant="h3" className={styles["register-title"]} gutterBottom>
        Register for EduVerse
      </Typography>

      {error && <Typography className={styles["error-message"]}>{error}</Typography>}

      <form onSubmit={handleSubmit} className={styles["register-form"]}>
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required fullWidth />
        <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth />
        <TextField label="Roll No" name="roll_no" value={formData.roll_no} onChange={handleChange} required fullWidth />
        <TextField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} required fullWidth />

        <Box className={styles["role-selection"]}>
          {["STUDENT", "TEACHER", "ADMIN"].map((role) => (
            <Button
              key={role}
              className={`${styles["role-button"]} ${selectedRole === role ? styles["selected"] : ""}`}
              onClick={() => handleRoleSelect(role)}
              variant={selectedRole === role ? "contained" : "outlined"}
            >
              {role}
            </Button>
          ))}
        </Box>

        <Button type="submit" className={styles["submit-button"]} variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
