const express = require("express");
const router = express.Router();
const { getHome, defRoute, getDashboard } = require("./../controllers/indexController.controller");

router.get ("/", getHome);

router.use(defRoute);

module.exports = router;