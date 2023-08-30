const Writes = require("../models/writings");

exports.postCreate = async function (req, res) {
    await Writes.create(req.body);
    res.redirect("/");
  }

  exports.editPage = async (req, res) => {
    const write = await Writes.findById(req.params.id);
    res.render("edit", {
      write,
    });
  }

  exports.editPageSend = async (req, res) => {
    await Writes.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      message: req.body.message,
    });
    res.redirect("/");
  }


  exports.deletePage = async (req, res) => {
    const write = await Writes.findByIdAndRemove(req.params.id);
    res.redirect("/");
  }