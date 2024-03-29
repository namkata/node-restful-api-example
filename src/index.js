const express = require("express");
const path = require("node:path");
const bodyParser = require("body-parser");
const apicache = require("apicache");
const app = express();
const webRoutes = require("./v1/routes/web");
const v1Router = require("./v1/routes/api");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const configViewEngine = require("./config/viewEngine");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

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
app.use(bodyParser.json());
const cache = apicache.middleware;
// app.use(express.json());
// app.use(express.urlencoded());

// calling router here
app.use(cache("1 minutes"));
app.use(webRoutes);
app.use("/api/v1", v1Router);
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(port, () => {
  console.log(`Example app listening at ${hostname}:${port}`);
  V1SwaggerDocs(app, port);
});
