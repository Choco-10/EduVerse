import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import StudentLogin from "./pages/Login/StudentLogin";
import TeacherLogin from "./pages/Login/TeacherLogin";
import AdminLogin from "./pages/Login/AdminLogin";
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import TeacherDashboard from './pages/Dashboard/TeacherDashboard';
import Classes from './pages/Dashboard/TSidebar/Classes';
import Assignments from './pages/Dashboard/TSidebar/Assignments';
import Quizzes from './pages/Dashboard/TSidebar/Quizzes';
//import Schedules from './pages/Dashboard/TSidebar/Schedules';
import Students from './pages/Dashboard/TSidebar/Students';
//import ClassDetail from './pages/Dashboard/TSidebar/ClassDetail';

// Admin Components
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import AddStudent from "./pages/Dashboard/ASidebar/AddStudent";
import AddTeacher from "./pages/Dashboard/ASidebar/AddTeacher";
import ManageUsers from "./pages/Dashboard/ASidebar/ManageUsers";
import ManageSubjects from "./pages/Dashboard/ASidebar/ManageSubjects";
import ManageClasses from "./pages/Dashboard/ASidebar/ManageClasses";
import AdminSchedules from "./pages/Dashboard/ASidebar/Schedules";
import Statistics from "./pages/Dashboard/ASidebar/Statistics";
import SetupInstitute from "./pages/Dashboard/ASidebar/SetupInstitute";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login/student" element={<StudentLogin />} />
      <Route path="/login/teacher" element={<TeacherLogin />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/teacher/dashboard/*" element={<TeacherDashboard />}>
        <Route path="classes" element={<Classes />} />
        {/* <Route path="classes/:classId" element={<ClassDetail />} /> */}
        <Route path="assignments" element={<Assignments />} />
        <Route path="quizzes" element={<Quizzes />} />
        {/* <Route path="schedules" element={<Schedules />} /> */}
        <Route path="students" element={<Students />} />
      </Route>
      <Route path="/admin/setup-institute" element={<SetupInstitute />} />
      <Route path="/admin/dashboard/*" element={<AdminDashboard />}>
        <Route path="" element={<Statistics />} /> {/* Default dashboard page */}
        <Route path="add-teacher" element={<AddTeacher />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="manage-subjects" element={<ManageSubjects />} />
        <Route path="manage-classes" element={<ManageClasses />} />
        <Route path="schedules" element={<AdminSchedules />} />
      </Route>
    </Routes>
    <Toaster position="top-right" />
  </Router>
);

export default AppRoutes;
