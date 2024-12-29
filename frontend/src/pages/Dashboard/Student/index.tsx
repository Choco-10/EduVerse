import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import styles from './StudentDashboard.module.css'; // Importing styles from the module.css
import QuizList from './quizzes/QuizList';

// Define the navigation links
const navLinks = [
    { label: "Quizzes", path: "/Dashboard/Student/quizzes" },
    { label: "Assignments", path: "/Dashboard/Student/assignments" },
    { label: "Attendance", path: "/Dashboard/Student/attendance" },
    { label: "Weekly Schedule", path: "/Dashboard/Student/weeklySchedule" },
];

const StudentDashboard = () => {
    return (
        <Box className={styles["dashboard-container"]}>
            {/* Top Title */}
            <Box className={styles["dashboard-header"]}>
                <Typography variant="h3" className={styles["dashboard-title"]}>
                    Student Dashboard
                </Typography>
            </Box>

            {/* Navbar */}
            <AppBar position="static" className={styles["navbar"]}>
                <Toolbar className={styles["navbar-toolbar"]}>
                    {navLinks.map((link) => (
                        <Button key={link.label} color="inherit" component={Link} to={link.path} className={styles["nav-button"]}>
                            {link.label}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Box className={styles["dashboard-content"]}>
                <Routes>
                    {/* Define routes for quizzes, assignments, etc. */}
                    <Route path='quizzes' element={<QuizList />} />
                    {/* <Route path='assignments' element={<AssignmentList />} />
                    <Route path='attendance' element={<AttendanceView />} />
                    <Route path='weeklySchedule' element={<Schedule />} /> */}
                </Routes>
            </Box>
        </Box>
    );
};

export default StudentDashboard;
