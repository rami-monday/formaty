const express = require("express");
const router = require("./server/routes");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("connected to db"))
  .catch(() => console.log("couldn't connect to db"));

app.use("/", express.static(path.join(__dirname, "build")));
app.use("/:page/:param?", express.static(path.join(__dirname, "build")));

app.use(express.json());
app.use(cors());
app.use("/api", router);
// test
app.listen(PORT, () =>
  console.log(`formaty server listening on port ${PORT}!`)
);
