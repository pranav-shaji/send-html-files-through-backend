const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  fs.readFile("./index.html", "utf8", (err, data) => {
    res.status(200).send(data)
  });
});
app.get("/home", (req, res) => {
  fs.readFile("./home.html", "utf8", (err, data) => {
    res.status(200).send(data)
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
