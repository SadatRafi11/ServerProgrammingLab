const getHome =  (req, res) => {
    res.clearCookie("loggedIn");
    res.status(200).sendFile("home.html", {root : "./views"});
    // res.render("dashboard.ejs");
}

const defRoute = (req, res) => {
    res.status(404);
    res.send("<h1>Error 404! Page doesn't exist.</h1>");
}

module.exports = { getHome, defRoute };