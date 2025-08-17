import React, { useEffect } from "react";
import AdminLayout from "./AdminLayout";
import { Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const institute = localStorage.getItem("institute");
    if (!institute) {
      navigate("/admin/setup-institute");
    }
  }, [navigate]);

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default AdminDashboard;
