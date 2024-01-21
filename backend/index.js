const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
require("./src/config/db");
const port = process.env.PORT;
cors = require("cors");
const router = require("./src/router/router");

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
