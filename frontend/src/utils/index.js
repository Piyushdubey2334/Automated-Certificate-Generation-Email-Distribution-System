import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5007/api", // This matches your backend app.use("/api", ...)
});

// This automatically attaches your Login Token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
