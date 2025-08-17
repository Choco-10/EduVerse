import React, { useState } from "react";
import axios from "../../../api/axios";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import toast from "react-hot-toast";

const AddTeacher = () => {
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
      await axios.post("/admin/add-teacher", formData);

      toast.success("Teacher added successfully!");
      setFormData({ name: "", roll_no: "" });
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Failed to add teacher");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
        <Typography variant="h5" gutterBottom>
          Add New Teacher
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
            {loading ? "Adding..." : "Add Teacher"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddTeacher;
