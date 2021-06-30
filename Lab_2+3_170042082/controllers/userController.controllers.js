const db = require("./../db_intgration");
const mysql = require("mysql");
require("dotenv").config();
const bcrypt = require('bcrypt');
const alert = require("alert");
// const jwt = require('jsonwebtoken');

const CREATE_TABLE = process.env.CREATE_TABLE;
const DB_PASSWORD = process.env.DB_PASSWORD;

const dbconnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    port: "3306",
    password: DB_PASSWORD,
    database: "user_base"
});

const getLogin = (req, res) => {
    res.status(203).sendFile("login.html", {root : "./views/users"});
}
//bcryptjs
const postLogin = async(req, res) => {
    const {email, password} = req.body;
    // console.log(hashedPassword);
    let loginQuery = "SELECT username, user_password FROM `users` WHERE `user_email` = '"+email+"'";
    dbconnection.query(loginQuery, async(err, result) => {
        if (err) throw err;
        // console.log(result[0]);
        // console.log(result);
        
        if (!(await bcrypt.compare(password,result[0].user_password))) {
            alert("Wrong Credentials!");
            res.sendFile("login.html", {root : "./views/users"});
        } else if (result != undefined) {
            console.log(result[0].username);
            console.log("valid user...");
            let thisUser = result[0].username;
            res.cookie("loggedIn", "yes");
            res.redirect(`/users/dashboard/${thisUser}`);
        } else {
            alert("Wrong Credentials!");
            res.sendFile("login.html", {root : "./views/users"});
        }
    });
}

const getRegister = (req, res) => {
    res.status(202).sendFile("register.html", {root : "./views/users"});
}

const postRegister = async(req, res) => {
    const {username, email, password} = req.body;
    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);
    // save user in the database
    let user = {
        username: username,
        user_email: email,
        user_password: hashedPassword
    };
    let insertQuery = "INSERT INTO users SET ?";
    db.insertUser(insertQuery, user);
    res.redirect("/users/login");
}

const getDashboard = (req, res) => {
    res.status(210);
    const username = req.params.username;
    res.sendFile("dashboard.html", {root : "./views/users"});
}

module.exports = {
    getLogin,
    getRegister,
    getDashboard,
    postLogin,
    postRegister,
};