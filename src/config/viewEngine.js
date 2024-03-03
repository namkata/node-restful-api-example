const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  // configure ejs template
  app.set("views", path.join(__dirname,'..', "views"));
  app.set("view engine", "ejs");
  // configure static
  app.use(express.static(path.join(__dirname,'..',"public")));
};

module.exports = configViewEngine;
