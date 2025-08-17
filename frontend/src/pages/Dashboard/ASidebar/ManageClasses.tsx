import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

const ManageClasses = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Manage Classes
      </Typography>
      <Box component="form" sx={{ display: "flex", gap: 2, mt: 2 }}>
        <TextField label="Class Name" />
        <TextField label="Class Code" />
        <Button variant="contained">Create Class</Button>
      </Box>
    </Box>
  );
};

export default ManageClasses;
