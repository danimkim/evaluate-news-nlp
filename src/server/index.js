const dotenv = require("dotenv");

dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// API
app.post("/analyze", async function (req, res) {
  const response = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`
  ).then((res) => res.json());

  res.send(response);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("App listening on port 8081!");
});
