const db = require("../../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* =========================================================
   LOGIN
========================================================= */

const login = async (req, res) => {
  try {
    console.log("=================================");
    console.log("LOGIN REQUEST RECEIVED");
    console.log("=================================");

    console.log("Request Body:", req.body);

    const loginId =
      req.body.loginId ||
      req.body.adminId ||
      req.body.username ||
      req.body.userId;

    const password = req.body.password;

    console.log("Login ID:", loginId);
    console.log(
      "Password received:",
      password ? "YES" : "NO"
    );

    /* =====================================================
       VALIDATION
    ===================================================== */

    if (!loginId || !password) {
      return res.status(400).json({
        success: false,
        message: "Login ID and password are required.",
      });
    }

    const cleanLoginId = String(loginId).trim();

    /* =====================================================
       FIND USER
    ===================================================== */

    const [rows] = await db.execute(
      `
      SELECT
        id,
        profile_image,
        email,
        mobile,
        first_name,
        last_name,
        username,
        admin_id,
        password_hash,
        role
      FROM admins
      WHERE admin_id = ?
         OR username = ?
      LIMIT 1
      `,
      [cleanLoginId, cleanLoginId]
    );

    console.log("Database rows:", rows.length);

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid Login ID or password.",
      });
    }

    const user = rows[0];

    console.log("User found:", user.username);
    console.log("Role:", user.role);

    /* =====================================================
       PASSWORD
    ===================================================== */

    const passwordMatch = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatch) {
      console.log("Password verification failed.");

      return res.status(401).json({
        success: false,
        message: "Invalid Login ID or password.",
      });
    }

    console.log("Password verification successful.");

    /* =====================================================
       ROLE
    ===================================================== */

    const allowedRoles = [
      "admin",
      "super_admin",
      "hr",
      "sales",
      "student",
      "teacher",
    ];

    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: "Invalid user role.",
      });
    }

    /* =====================================================
       JWT
    ===================================================== */

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing in .env");

      return res.status(500).json({
        success: false,
        message: "Server authentication configuration error.",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    /* =====================================================
       HTTP ONLY COOKIE
    ===================================================== */

    res.cookie("token", token, {
      httpOnly: true,

      secure: process.env.NODE_ENV === "production",

      sameSite:
        process.env.NODE_ENV === "production"
          ? "none"
          : "lax",

      maxAge: 60 * 60 * 1000,

      path: "/",
    });

    console.log("LOGIN SUCCESS");
    console.log("User:", user.username);
    console.log("Role:", user.role);

    /* =====================================================
       RESPONSE
    ===================================================== */

    return res.status(200).json({
      success: true,
      message: "Login successful.",

      role: user.role,

      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        username: user.username,
        email: user.email,
        mobile: user.mobile,
        adminId: user.admin_id,
        profileImage: user.profile_image,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

/* =========================================================
   CURRENT USER
========================================================= */

const me = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    const [rows] = await db.execute(
      `
      SELECT
        id,
        profile_image,
        email,
        mobile,
        first_name,
        last_name,
        username,
        admin_id,
        role
      FROM admins
      WHERE id = ?
      LIMIT 1
      `,
      [req.user.id]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    const user = rows[0];

    return res.status(200).json({
      success: true,

      role: user.role,

      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        username: user.username,
        email: user.email,
        mobile: user.mobile,
        adminId: user.admin_id,
        profileImage: user.profile_image,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("ME ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

/* =========================================================
   LOGOUT
========================================================= */

const logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,

      secure: process.env.NODE_ENV === "production",

      sameSite:
        process.env.NODE_ENV === "production"
          ? "none"
          : "lax",

      path: "/",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful.",
    });
  } catch (error) {
    console.error("LOGOUT ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Logout failed.",
    });
  }
};

module.exports = {
  login,
  me,
  logout,
};