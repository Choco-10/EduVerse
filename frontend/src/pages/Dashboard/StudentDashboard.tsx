import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const StudentDashboard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f0f2f5"
    >
      <Typography variant="h3" gutterBottom>
        Welcome to the Student Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here you'll find your assignments, grades, schedule, and more.
      </Typography>
      <Button variant="contained" color="primary">
        Explore Features
      </Button>
    </Box>
  );
};

export default StudentDashboard;
