const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const Writes = require("./models/writings");
var methodOverride = require("method-override");
const { HTTPMethod } = require("http-method-enum");
const pageController = require("./controllers/pageController");
const postController = require("./controllers/postController");

const app = express();

//connect DB
mongoose
  .connect(
    "mongodb+srv://ethemmfiratalikan:Df78v5b5.@cluster0.silihvv.mongodb.net/clean-blog?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log("dbconnected!");
  })
  .catch((err) => {
    console.log(err);
  });

//Template engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: [
      HTTPMethod.POST,
      HTTPMethod.GET,
      HTTPMethod.PUT,
      HTTPMethod.DELETE,
    ],
  }),
);

app.get("/", pageController.homeController);
app.get("/posts/:id", pageController.postPageController);
app.get("/add_post", function (req, res) {
  res.render("add_post");
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.post("/writes", postController.postCreate);

app.get("/writes/:id", postController.editPage);

app.put("/writes/edit/:id", postController.editPageSend);

app.delete("/writes/:id", postController.deletePage);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı`);
});
