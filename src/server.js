const express = require("express");
const path = require("node:path");
const app = express();

/**
 * 
 * dependencies vs Devdependencies:
 * 
 * A dependency is a library that a project needs to function effectively. 
 * DevDependencies are the packages a developer needs during development.
 */

// configure env variable
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME || "127.0.0.1";

// configure static
app.use(express.static(path.join(__dirname, 'public')))

// configure ejs template
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening at ${hostname}:${port}`);
});


