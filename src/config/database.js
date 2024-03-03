const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  port: process.env.DB_PORT || "3307",
  database: process.env.DB_NAME || "namtran",
  password: process.env.DB_PASSWORD || "123456",
});

module.exports = connection;
