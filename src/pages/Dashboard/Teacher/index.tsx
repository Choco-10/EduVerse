import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./TeacherDashboard.module.css";

const TeacherDashboard = () => {
  return (
    <div className={styles["dashboard-container"]}>
      {/* Top Title */}
      <Box className={styles["dashboard-header"]}>
        <Typography variant="h3" className={styles["dashboard-title"]}>
          Teacher Dashboard
        </Typography>
      </Box>

      {/* Navbar */}
      <Box className={styles["navbar"]}>
        <Button variant="text" className={styles["nav-button"]} sx={{ color: 'white' }}>
          Post Assignment
        </Button>
        <Button variant="text" className={styles["nav-button"]} sx={{ color: 'white' }}>
          Post Quiz
        </Button>
        <Button variant="text" className={styles["nav-button"]} sx={{ color: 'white' }}>
          View Attendance
        </Button>
        <Button variant="text" className={styles["nav-button"]} sx={{ color: 'white' }}>
          Grade Submissions
        </Button>
      </Box>

      {/* Main Content */}
      <Box className={styles["dashboard-content"]}>
        <Typography variant="h6" className={styles["content-title"]}>
          Welcome to your Teacher Dashboard! Choose an action from the navbar.
        </Typography>
      </Box>
    </div>
  );
};

export default TeacherDashboard;
