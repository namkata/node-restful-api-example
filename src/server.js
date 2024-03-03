const express = require("express");
const path = require("node:path");
const app = express();
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const configViewEngine = require("./config/viewEngine");

/**
 *
 * dependencies vs Devdependencies:
 *
 * A dependency is a library that a project needs to function effectively.
 * DevDependencies are the packages a developer needs during development.
 */

// configure env variable
require("dotenv").config({ path: path.resolve(__dirname, "..", "./.env") });

const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME || "127.0.0.1";

configViewEngine(app);

// calling router here
app.use(webRoutes);

app.listen(port, () => {
  console.log(`Example app listening at ${hostname}:${port}`);
});
