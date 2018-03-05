const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const router = require("./router/index.js");
const fileUpload = require('express-fileupload');

app.use(morgan("dev"));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/../client/dist")));

app.use("/api", router);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
