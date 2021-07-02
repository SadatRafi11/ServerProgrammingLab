var express = require('express');
var app = express();
var cookieParser = require("cookie-parser");
const alert = require("alert")

app.use(cookieParser());

const isLoggedIn = (req,res,next) => {
    const cookies = decodeURIComponent(req.headers.cookie);
    const thisuser = req.params.username;
    const lengthOfCookie = cookies.length;
    
    // console.log(cookies);
    // console.log(lengthOfCookie);

    if (cookies == undefined) {
        alert("you're not logged in -_-");
        res.redirect("/users/login");
    } else if (cookies.substring(0, 8) == "loggedIn") {
        if (cookies.substring(9,lengthOfCookie) == thisuser) {
            next();
        } else {
            alert("Login with your credentials");
        res.redirect("/users/login");
        }
    } else {
        alert("Login with your credentials");
        res.redirect("/users/login");
    } 
}

module.exports = {isLoggedIn};