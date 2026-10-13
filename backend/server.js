require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { testDB } = require("./src/config/db");
const routes = require("./src/routes");
const { errorHandler } = require("./src/middleware/errorMiddleware");

const app = express();
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://automated-certificate-generation-em.vercel.app",
];

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin) || /\.vercel\.app$/.test(origin)) {
        return cb(null, true);
      }
      cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  })
);

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