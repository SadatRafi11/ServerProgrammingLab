var express = require('express');
var app = express();
var cookieParser = require("cookie-parser");
const alert = require("alert")

app.use(cookieParser());

const isLoggedIn = (req,res,next) => {
    const cookies = req.headers.cookie;

    if (cookies == undefined) {
        alert("you're not logged in -_-");
        res.redirect("/users/login");
    } else if (cookies.substring(0, 8) == "loggedIn") {
        if (cookies.substring(9, 12) == "yes") {
            next();
        }
    } else {
        alert("Login with your credentials");
        res.redirect("/users/login");
    } 
}

module.exports = {isLoggedIn};