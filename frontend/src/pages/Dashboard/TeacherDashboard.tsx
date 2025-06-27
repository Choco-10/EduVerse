// Dashboard/TeacherDashboard.tsx

import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import TeacherSidebar from "./TeacherSidebar";

const TeacherDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <TeacherSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet /> {/* This will render nested routes like /classes, /assignments, etc. */}
      </Box>
    </Box>
  );
};

export default TeacherDashboard;
