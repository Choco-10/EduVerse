import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";

const TeacherHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token / user data
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#1976d2",
      }}
    >
      <Toolbar>
        <SchoolIcon sx={{ mr: 1 }} />
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          EduVerse - Teacher Panel
        </Typography>

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        <Button color="inherit" onClick={handleLogout} startIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TeacherHeader;
