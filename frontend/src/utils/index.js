import axios from "axios";

// Aakhri slash agar ho to use saaf karein
const rawURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5007";
const cleanURL = rawURL.replace(/\/+$/, "");

// Agar rawURL me already /api likha ho to dobara mat jodo
const baseURL = cleanURL.endsWith("/api") ? cleanURL : `${cleanURL}/api`;

const API = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

// Automatically attach Login Token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;