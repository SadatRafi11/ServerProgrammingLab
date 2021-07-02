const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.routes");
const indexRoutes = require("./routes/indexRoutes.routes");
const path = require('path');

app.use(express.static("public"));

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/users/", userRoutes);
app.use("/", indexRoutes);

module.exports = app;