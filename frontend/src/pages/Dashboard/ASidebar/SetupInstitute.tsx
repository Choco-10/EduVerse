import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "../../../api/axios";

const SetupInstitute = () => {
  const [institute, setInstitute] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = institute.trim();
    if (!trimmedName) {
      toast.error("Institute name cannot be empty.");
      return;
    }

    try {
      const response = await axios.post("/institute", { name: trimmedName });

      localStorage.setItem("institute", response.data.name);
      toast.success("Institute setup complete!");
      navigate("/admin/dashboard");
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Failed to set up institute.";
      toast.error(message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 10,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Setup Your Institute
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Institute Name"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save & Continue
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SetupInstitute;
