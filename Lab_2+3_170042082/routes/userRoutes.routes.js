const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const {isLoggedIn} = require("./../middlewares/users.middlewares.js");

const {
    getLogin,
    getRegister,
    postLogin,
    postRegister,
    getDashboard,
} = require("./../controllers/userController.controllers");

router.use(bodyParser.urlencoded({ extended : false}));
router.use(bodyParser.json());

router.get("/login", getLogin);

router.post("/login", postLogin);

router.get("/register", getRegister);

router.post("/register", postRegister);

router.get("/dashboard/:username", isLoggedIn, getDashboard);

router.use((req, res) => {
    res.send("<h1>he he he</h1>");
});

module.exports = router;