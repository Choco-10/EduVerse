import React, { useState } from "react";
import axios from "../../../api/axios";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import toast from "react-hot-toast";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    roll_no: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const institute = localStorage.getItem("institute");
      const { name, roll_no } = formData;

      const payload = {
        name,
        roll_no,
        email: `${roll_no}@${institute}.eduverse.com`,
        password: "user@123",
        role: "STUDENT",
      };

      await axios.post("/admin/add-student", payload);

      toast.success("Student added successfully!");
      setFormData({ name: "", roll_no: "" });
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Failed to add student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
        <Typography variant="h5" gutterBottom>
          Add New Student
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Full Name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            name="roll_no"
            label="Roll Number"
            fullWidth
            margin="normal"
            value={formData.roll_no}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? "Adding..." : "Add Student"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddStudent;
