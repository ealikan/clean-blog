const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const Writes = require("./models/writings");

const app = express();

//connect DB
mongoose.connect("mongodb://127.0.0.1:27017/clean-blog-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Template engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async function (req, res) {
  const writes = await Writes.find({}).sort({ dateCreated: -1 });
  res.render("index", {
    writes,
  });
});
app.get("/add_post", function (req, res) {
  res.render("add_post");
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.post("/writes", async function (req, res) {
  await Writes.create(req.body);
  res.redirect("/");
});

app.listen(3000);
