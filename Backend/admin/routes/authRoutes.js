const express = require("express");

const {
  login,
  me,
  logout,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/* =========================================================
   LOGIN
========================================================= */

router.post("/login", login);

/* =========================================================
   CURRENT USER
========================================================= */

router.get(
  "/me",
  authMiddleware,
  me
);

/* =========================================================
   LOGOUT
========================================================= */

router.post(
  "/logout",
  authMiddleware,
  logout
);

module.exports = router;