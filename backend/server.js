require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { testDB } = require("./src/config/db");
const routes = require("./src/routes");
const { errorHandler } = require("./src/middleware/errorMiddleware");

const app = express();

// Database test connection
testDB();
// initDB();

// 1. CORS Setup (Testing aur Production dono allow karega bina OPTIONS crash ke)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://automated-certificate-generation-em.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g. mobile apps, curl, postman)
      if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 2. Preflight (OPTIONS) manual fallback handler (No wildcard '*' to prevent Render crash)
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin) || (origin && origin.endsWith(".vercel.app"))) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    return res.sendStatus(204);
  }
  next();
});

// 3. Body parsers & logger
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Health Check Route
app.get("/", (req, res) => {
  console.log("Server is Running..");
  return res.json({ success: true, message: "Server started successfully" });
});

// 5. API Routes
app.use("/api", routes);

// 6. Error Handler Middleware
app.use(errorHandler);

// 7. Port Listen (Render binds automatically via process.env.PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port: ${PORT}`);
});