const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const writingSchema = new Schema({
  name: String,
  message: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Writes = mongoose.model("write", writingSchema);

module.exports = Writes;
