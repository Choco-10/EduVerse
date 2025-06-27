import { useState } from "react";
import { TextField, Button, Typography, Alert } from "@mui/material";
import axios from "../../../api/axios";

const AddStudent = ({ classId, refresh }: { classId: number; refresh: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    roll_no: "",
    institute: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      await axios.post(`/teacher/classes/${classId}/add-student`, formData);
      setSuccess("Student added successfully!");
      setFormData({ name: "", roll_no: "", institute: "" });
      refresh();
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to add student");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>Add Student</Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required margin="normal" />
      <TextField label="Roll Number" name="roll_no" value={formData.roll_no} onChange={handleChange} fullWidth required margin="normal" />
      <TextField label="Institute" name="institute" value={formData.institute} onChange={handleChange} fullWidth required margin="normal" />

      <Button type="submit" variant="contained" color="primary">Add Student</Button>
    </form>
  );
};

export default AddStudent;
