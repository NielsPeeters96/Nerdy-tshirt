import bodyParser from "body-parser";
import express from "express";

import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// static files
app.use(express.static("public"));

// Set views
app.set("views", "./views");
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("home.ejs", {formData:req.query});
});

app.post("/bestellen", (req, res) => {
  res.render("home.ejs", {formData:req.query});
});

app.get("/bestellen", (req, res) => {
  res.render("bestellen.ejs");
});

app.get("/winkelmand", (req, res) => {
  res.render("winkelmand.ejs");
});

app.post("/winkelmand", urlencodedParser, (req, res) => {
  if (req.body.kleur) {
    res.redirect(`/?shirtColor=${req.body.shirtColor}&gender=${req.body.gender}&shirtSize=${req.body.shirtSize}&userText=${req.body.userText}`);
  }
  else {
    const readableData = JSON.parse(fs.readFileSync("./data.json"));
    readableData.data.push(req.body);
    const stringData = JSON.stringify(readableData, null, 2);
    fs.writeFileSync("data.json", stringData);
    res.render("winkelmand.ejs", { data: readableData });
  }
});

// Start server
app.listen(port, () => console.log("Listening to port " + port));