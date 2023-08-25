const express = require("express");
const app = express();
const ejs = require("ejs")

//Template engine
app.set("view engine","ejs")

//middlewares
app.use(express.static("public"))

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/add_post", function (req, res) {
  res.render("add_post");
});
app.get("/about", function (req, res) {
  res.render("about");
});


app.listen(3000);
