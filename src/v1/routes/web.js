const express = require("express");
const router = express.Router();

const {
  getHomepage,
  getABC,
  postAddUser,
} = require("../../controllers/homeController");

router.get("/", getHomepage);

router.get("/abc", getABC);

router.post("/create-user", postAddUser);

module.exports = router;
