const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("hi there I am server");
});

app.listen(port, (req, res) => {
  console.log(`server is running on ${port}`);
});
