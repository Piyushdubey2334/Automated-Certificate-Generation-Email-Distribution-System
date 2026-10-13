require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { testDB } = require("./src/config/db");
const routes = require("./src/routes");
const { errorHandler } = require("./src/middleware/errorMiddleware");

const app = express();

// 1. Universal CORS & Preflight Handler
app.use((req, res, next) => {
  const allowed = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://automated-certificate-generation-em.vercel.app"
  ];
  const origin = req.headers.origin;

  if (allowed.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "https://automated-certificate-generation-em.vercel.app");
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Accept");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// 2. Database test connection
testDB();
// initDB();

// 3. Body parsers aur logger
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Health Check Route
app.get("/", (req, res) => {
  console.log("Server is Running..");
  return res.json({ success: true, message: "Server started successfully" });
});

// 5. Main API Routes
app.use("/api", routes);

// 6. Error Handler Middleware
app.use(errorHandler);

// 7. Port Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port: ${PORT}`);
});