const mysql = require("mysql2");

// configure pool on connect to database server

const connection = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  port: process.env.DB_PORT || "3307",
  database: process.env.DB_NAME || "namtran",
  password: process.env.DB_PASSWORD || "123456",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
