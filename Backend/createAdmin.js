require("dotenv").config();

const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");

async function createAdmin() {
  let connection;

  try {
    console.log("=================================");
    console.log("   ARBOR LMS - CREATE ADMIN");
    console.log("=================================");

    console.log("Connecting to MySQL...");

    connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "arbor_lms",
    });

    console.log("MySQL connected successfully.");

    // ==========================================
    // ADMIN DETAILS
    // ==========================================

    const admin = {
      profile_image: null,

      email: "admin@arboracademy.in",

      mobile: "9028777287",

      first_name: "Soham",

      last_name: "Dhadve",

      username: "soham12",

      admin_id: "9867111359",

      password: "Admin@123",

      role: "admin",
    };

    // ==========================================
    // CHECK EXISTING ADMIN
    // ==========================================

    const [existingAdmin] = await connection.execute(
      `
      SELECT id
      FROM admins
      WHERE email = ?
         OR mobile = ?
         OR username = ?
         OR admin_id = ?
      LIMIT 1
      `,
      [
        admin.email,
        admin.mobile,
        admin.username,
        admin.admin_id,
      ]
    );

    if (existingAdmin.length > 0) {
      console.log("");
      console.log("Admin already exists.");
      console.log("Database ID:", existingAdmin[0].id);

      await connection.end();
      return;
    }

    // ==========================================
    // HASH PASSWORD
    // ==========================================

    const passwordHash = await bcrypt.hash(
      admin.password,
      12
    );

    // ==========================================
    // INSERT ADMIN
    // ==========================================

    const [result] = await connection.execute(
      `
      INSERT INTO admins
      (
        profile_image,
        email,
        mobile,
        first_name,
        last_name,
        username,
        admin_id,
        password_hash,
        role
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        admin.profile_image,
        admin.email,
        admin.mobile,
        admin.first_name,
        admin.last_name,
        admin.username,
        admin.admin_id,
        passwordHash,
        admin.role,
      ]
    );

    console.log("");
    console.log("=================================");
    console.log("   ADMIN CREATED SUCCESSFULLY");
    console.log("=================================");
    console.log("");

    console.log("Database ID :", result.insertId);
    console.log("First Name  :", admin.first_name);
    console.log("Last Name   :", admin.last_name);
    console.log("Username    :", admin.username);
    console.log("Admin ID    :", admin.admin_id);
    console.log("Email       :", admin.email);
    console.log("Mobile      :", admin.mobile);
    console.log("Role        :", admin.role);

    console.log("");
    console.log("LOGIN DETAILS");
    console.log("---------------------------------");
    console.log("Admin ID    :", admin.admin_id);
    console.log("Password    :", admin.password);
    console.log("---------------------------------");
    console.log("");

    await connection.end();

  } catch (error) {
    console.error("");
    console.error("=================================");
    console.error("      CREATE ADMIN ERROR");
    console.error("=================================");
    console.error(error.message);

    if (connection) {
      await connection.end();
    }

    process.exit(1);
  }
}

createAdmin();