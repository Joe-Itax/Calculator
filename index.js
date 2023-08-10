/*
NE RIEN MODIFIER ICI
*/
const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
