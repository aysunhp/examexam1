const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://bd7zatzha:aysun@cluster1.fww0wjn.mongodb.net/bduexam?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Failed", err);
  });
