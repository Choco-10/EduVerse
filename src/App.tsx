import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
