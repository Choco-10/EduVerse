import React from "react";
import { Drawer, List, ListItemText, Toolbar, ListItemButton, } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const navItems = [
  { label: "Classes", path: "classes" },
  { label: "Assignments", path: "assignments" },
  { label: "Quizzes", path: "quizzes" },
  { label: "Students", path: "students" }, // Only managing own students
];

const TeacherSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={RouterLink}
            to={`/teacher/dashboard/${item.path}`}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default TeacherSidebar;
