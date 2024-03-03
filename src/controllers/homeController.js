const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.render("sample.ejs");
};

const postAddUser = (req, res) => {
  let { email, name, city } = req.body;

  connection.query(
    `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("Create a user successfully")
    }
  );
};

module.exports = {
  getHomepage,
  getABC,
  postAddUser,
};
