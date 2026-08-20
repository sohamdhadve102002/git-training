const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoutes = require("./admin/routes/authRoutes");
const db = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

/* =========================================================
   TEST API
========================================================= */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Arbor LMS API is running",
  });
});

/* =========================================================
   AUTH ROUTES
========================================================= */

app.use("/api/auth", authRoutes);

/* =========================================================
   404 API
========================================================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

/* =========================================================
   SERVER
========================================================= */

const startServer = async () => {
  try {
    await db.execute("SELECT 1");

    console.log("MySQL connection successful.");

    app.listen(PORT, () => {
      console.log(
        `Arbor LMS API running on http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Server failed:", error.message);
    process.exit(1);
  }
};

startServer();