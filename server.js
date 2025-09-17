const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // your MySQL username
  password: "Naidu@123", // your MySQL password
  database: "contactdb", // make sure database exists
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
    return;
  }
  console.log("✅ MySQL Connected!");
});

// API route
app.post("/api/contact", (req, res) => {
  const { name, email, number, subject, message } = req.body;

  const sql =
    "INSERT INTO contacts (name, email, number, subject, message) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, email, number, subject, message], (err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "Database error: " + err.sqlMessage });
    }
    res.json({ message: "✅Submitted successfully!" });
  });
});

// Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
