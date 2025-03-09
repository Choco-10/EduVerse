import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/student" element={<div>Student Login Page</div>} />
        <Route path="/login/teacher" element={<div>Teacher Login Page</div>} />
        <Route path="/register" element={<div>Register Page</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
