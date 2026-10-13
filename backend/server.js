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

// 1. Direct Preflight & CORS Handler (Isse OPTIONS request kabhi 404 nahi hogi)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Browser ki preflight verification ko turant 200 OK bhej kar khatam karega
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// 2. Fallback CORS library support
app.use(cors());

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