import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

const ManageSubjects = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Manage Subjects
      </Typography>
      <Box component="form" sx={{ display: "flex", gap: 2, mt: 2 }}>
        <TextField label="Subject Name" />
        <TextField label="Subject Code (optional)" />
        <Button variant="contained">Add Subject</Button>
      </Box>
    </Box>
  );
};

export default ManageSubjects;
