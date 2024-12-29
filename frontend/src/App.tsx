import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import StudentDashboard from "./pages/Dashboard/Student";
import TeacherDashboard from "./pages/Dashboard/Teacher";
// import AdminDashboard from "./pages/Dashboard/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
//import Register from "./pages/Register";
import StudentLogin from "./pages/Login/StudentLogin";
import TeacherLogin from "./pages/Login/TeacherLogin";

// Custom Material-UI Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/login/teacher" element={<TeacherLogin />} />
          {/*<Route path="/register" element={<Register />} />*/}

          {/* Dashboard Routes */}
          <Route path="/dashboard/student/*" element={<StudentDashboard />} />
          <Route path="/dashboard/teacher/*" element={<TeacherDashboard />} />
          {/* <Route path="/dashboard/admin/*" element={<AdminDashboard />} /> */}

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
