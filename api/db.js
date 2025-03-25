import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "ballast.proxy.rlwy.net",
  user: "root",
  port: "52150",
  password:"izpucMSXUjipNxedbWXOmSOOPRSYveyL",
  database: "railway",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to database successfully!");
});

