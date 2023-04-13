const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { number } = req.query;
  const inputValue = parseInt(Math.round(number));
  if (!number) {
    res.send("Lack of Parameter");
  } else if (isNaN(inputValue)) {
    res.send("Wrong Parameter");
  } else {
    const sum = (inputValue * (inputValue + 1)) / 2;
    res.send(`The answer is ${sum.toString()}`);
  }
});

module.exports = router;

//  http://localhost:3000/getData?number=xyz
