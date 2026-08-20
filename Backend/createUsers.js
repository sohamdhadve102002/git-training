require("dotenv").config();

const bcrypt = require("bcrypt");
const pool = require("./config/db");

const createUsers = async () => {

  try {

    console.log("=================================");
    console.log("      ARBOR LMS USERS");
    console.log("=================================");

    /*
    =======================================================
    PASSWORDS
    =======================================================
    */

    const adminPassword =
      await bcrypt.hash("Admin@123", 12);

    const hrPassword =
      await bcrypt.hash("HR@12345", 12);

    const salesPassword =
      await bcrypt.hash("Sales@123", 12);

    const studentPassword =
      await bcrypt.hash("Student@123", 12);

    const teacherPassword =
      await bcrypt.hash("Teacher@123", 12);


    /*
    =======================================================
    ADMIN
    =======================================================
    */

    await pool.execute(
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
      ON DUPLICATE KEY UPDATE
      updated_at = CURRENT_TIMESTAMP
      `,
      [
        null,
        "admin@arboracademy.in",
        "9028777287",
        "Soham",
        "Dhadve",
        "soham12",
        "9867111359",
        adminPassword,
        "admin",
      ]
    );


    /*
    =======================================================
    HR
    =======================================================
    */

    await pool.execute(
      `
      INSERT INTO hr
      (
        profile_image,
        email,
        mobile,
        first_name,
        last_name,
        username,
        hr_id,
        password_hash,
        role
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      updated_at = CURRENT_TIMESTAMP
      `,
      [
        null,
        "hr@arboracademy.in",
        "9000000001",
        "HR",
        "Manager",
        "hrmanager",
        "1000000001",
        hrPassword,
        "hr",
      ]
    );


    /*
    =======================================================
    SALES
    =======================================================
    */

    await pool.execute(
      `
      INSERT INTO sales
      (
        profile_image,
        email,
        mobile,
        first_name,
        last_name,
        username,
        sales_id,
        password_hash,
        role
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      updated_at = CURRENT_TIMESTAMP
      `,
      [
        null,
        "sales@arboracademy.in",
        "9000000002",
        "Sales",
        "Manager",
        "salesmanager",
        "1000000002",
        salesPassword,
        "sales",
      ]
    );


    /*
    =======================================================
    STUDENT
    =======================================================
    */

    await pool.execute(
      `
      INSERT INTO students
      (
        profile_image,
        email,
        mobile,
        first_name,
        last_name,
        username,
        student_id,
        password_hash,
        role
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      updated_at = CURRENT_TIMESTAMP
      `,
      [
        null,
        "student@arboracademy.in",
        "9000000003",
        "Student",
        "Demo",
        "studentdemo",
        "1000000003",
        studentPassword,
        "student",
      ]
    );


    /*
    =======================================================
    TEACHER
    =======================================================
    */

    await pool.execute(
      `
      INSERT INTO teachers
      (
        profile_image,
        email,
        mobile,
        first_name,
        last_name,
        username,
        teacher_id,
        password_hash,
        role
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      updated_at = CURRENT_TIMESTAMP
      `,
      [
        null,
        "teacher@arboracademy.in",
        "9000000004",
        "Teacher",
        "Demo",
        "teacherdemo",
        "1000000004",
        teacherPassword,
        "teacher",
      ]
    );


    console.log("");
    console.log("USERS CREATED SUCCESSFULLY");
    console.log("");

    console.log("ADMIN");
    console.log("ID       : 9867111359");
    console.log("Password : Admin@123");

    console.log("");

    console.log("HR");
    console.log("ID       : 1000000001");
    console.log("Password : HR@12345");

    console.log("");

    console.log("SALES");
    console.log("ID       : 1000000002");
    console.log("Password : Sales@123");

    console.log("");

    console.log("STUDENT");
    console.log("ID       : 1000000003");
    console.log("Password : Student@123");

    console.log("");

    console.log("TEACHER");
    console.log("ID       : 1000000004");
    console.log("Password : Teacher@123");

    console.log("");

    await pool.end();

  } catch (error) {

    console.error(
      "Create Users Error:",
      error.message
    );

    process.exit(1);
  }
};

createUsers();