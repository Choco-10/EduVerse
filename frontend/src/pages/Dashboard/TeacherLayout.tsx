import React from "react";
import { Box, Toolbar } from "@mui/material";
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <TeacherHeader />
      <TeacherSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* To offset header height */}
        {children}
      </Box>
    </Box>
  );
};

export default TeacherLayout;
