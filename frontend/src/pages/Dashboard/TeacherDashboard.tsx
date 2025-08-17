// pages/Dashboard/TeacherDashboard.tsx

import { Outlet } from "react-router-dom";
import TeacherLayout from "./TeacherLayout";

const TeacherDashboard = () => {
  return (
    <TeacherLayout>
      <Outlet /> {/* This renders nested routes inside the layout */}
    </TeacherLayout>
  );
};

export default TeacherDashboard;
