const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;

const DIST_DIR = path.join(__dirname, "build/static");
const HTML_FILE = path.join(DIST_DIR, "index.html");
app.use(express.static(DIST_DIR));
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});
app.get("/api/ping", (req, res) => {
  res.send("pong");
});

app.listen(port);
