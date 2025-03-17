import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "sql7.freesqldatabase.com",
  user: "sql7767868",
  password: "vtMKEnlZdr",
  database: "sql7767868",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to database successfully!");
});

