import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import StudentLogin from "./pages/Login/StudentLogin";
import TeacherLogin from "./pages/Login/TeacherLogin";
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import TeacherDashboard from './pages/Dashboard/TeacherDashboard';
import Classes from './pages/Dashboard/TSidebar/Classes';
import Assignments from './pages/Dashboard/TSidebar/Assignments';
import Quizzes from './pages/Dashboard/TSidebar/Quizzes';
import Schedules from './pages/Dashboard/TSidebar/Schedules';
import Students from './pages/Dashboard/TSidebar/Students';
import ClassDetail from './pages/Dashboard/TSidebar/ClassDetail';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login/student" element={<StudentLogin />} />
      <Route path="/login/teacher" element={<TeacherLogin />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/teacher/dashboard/*" element={<TeacherDashboard />}>
        <Route path="classes" element={<Classes />} />
        <Route path="classes/:classId" element={<ClassDetail />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="schedules" element={<Schedules />} />
        <Route path="students" element={<Students />} />
      </Route>

      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default AppRoutes;
