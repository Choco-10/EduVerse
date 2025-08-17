import React from "react";
import { Drawer, List, ListItemText, Toolbar, ListItemButton, } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const adminNavItems = [
  { label: "Add Teacher", path: "add-teacher" },
  { label: "Add Student", path: "add-student" },
  { label: "Manage Users", path: "manage-users" },
  { label: "Manage Subjects", path: "manage-subjects" },
  { label: "Manage Classes", path: "manage-classes" },
  { label: "Schedules", path: "schedules" }
];

const AdminSidebar = () => {
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
        {adminNavItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={RouterLink}
            to={`/admin/dashboard/${item.path}`}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
