import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Automatically adds this to all routes
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to every request if present
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
