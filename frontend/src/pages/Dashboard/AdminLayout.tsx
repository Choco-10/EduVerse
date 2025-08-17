import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { Toolbar, Box } from "@mui/material";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const institute = localStorage.getItem("institute");

    // Prevent infinite loop if already on setup page
    if (!institute && location.pathname !== "/admin/setup-institute") {
      navigate("/admin/setup-institute");
    }
  }, [location.pathname, navigate]);

  const institute = localStorage.getItem("institute");

  // Block rendering children if institute isn't set and not on setup page
  if (!institute && location.pathname !== "/admin/setup-institute") {
    return null;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AdminHeader />
      <AdminSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
