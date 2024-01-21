const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    price: String,
    type: String,
    ingredients: String,
  },
  {
    collection: "bduexam",
  }
);

const User = mongoose.model("bduexam", userSchema);

module.exports = User;
