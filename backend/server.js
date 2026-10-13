require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { testDB } = require("./src/config/db");
const routes = require("./src/routes");
const { errorHandler } = require("./src/middleware/errorMiddleware");

const app = express();
testDB();
// initDB();

const allowedOrigins = [
  "http://localhost:5173", // Vite local dev server
  "http://localhost:3000",
  "https://automated-certificate-generation-em.vercel.app", // aapka live Vercel URL
];


app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman or mobile apps)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.options("*", cors());

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Serve is Running..");
  return res.json({ success: true, message: "Server started successfully" });
});


app.use("/api", routes);


app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running: ${PORT}`));
