const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

// -----middleWare------
app.use(express.static("public"));
app.use(cookieParser());
// -----routes------
const mainRoutes = require("./routes/index");
const getDataRoutes = require("./routes/getData");
app.use("/", mainRoutes);
app.use("/getData", getDataRoutes);

// -----listen------

app.listen("3000", (req, res) => {
  console.log("Hello, My Server!, localhost:3000");
});
