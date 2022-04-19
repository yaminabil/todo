require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const logger = require("morgan");
const favicon = require("morgan");
const path = require("path");
const todoController = require("./controllers/todo");
const PORT = process.env.PORT || 3001;
require("./config/database.js");

app.use(cors());
app.use(express.json());
app.use(logger("dev")); // middle ware
app.use(express.json());
app.use("/api/todo", todoController);

// app.use(favicon(path.join(__dirname, "build", "favicon.ico"))); // dir name always give you
// app.use(express.static(path.join(__dirname, "build"))); // directory that we're in slash build
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`backend is listening on ${PORT}`);
});
