const Writes = require("../models/writings");

exports.homeController = async function (req, res) {
  const writes = await Writes.find({}).sort({ dateCreated: -1 });
  res.render("index", {
    writes,
  });
};

exports.postPageController  = async function (req, res) {
    const write = await Writes.findById(req.params.id);
    res.render("post", {
      write,
    });
  }
