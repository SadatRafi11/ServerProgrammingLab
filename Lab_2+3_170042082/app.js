const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.routes");
const db = require("./db_intgration");

db.dbconnection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    db.createTable(db.CREATE_TABLE);
});

app.use(express.static("public"));

app.use("/users/", userRoutes);

app.get("/", (req, res) => {
    res.clearCookie("loggedIn");
    res.status(200).sendFile("home.html", {root : "./views"});
});

app.use((req, res) => {
    res.status(404);
    res.send("<h1>Error 404! Page doesn't exist.</h1>");
});

module.exports = app;