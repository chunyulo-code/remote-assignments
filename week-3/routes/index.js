const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You are at HOMEPAGE");
});

router.get("/myName", (req, res) => {
  if (req.cookies.name) {
    res.send(req.cookies.name);
  } else {
    res.redirect("/login.html");
  }
});

router.get("/trackName", (req, res) => {
  res.cookie("name", req.query.name);
  res.redirect("/myName");
});

module.exports = router;
