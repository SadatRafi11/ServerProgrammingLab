const aHttp = require("http");

module.exports.myServer = aHttp.createServer((req, res) => {

    if (req.url == "/") res.write("<h1>This is the BASE!</h1>", "utf-8", (err) => {
        if (err) console.log(err);
        else console.log("at the base right now");
    });
    else if (req.url == "/home") res.write("<h1>Home is, where heart is!</h1>", "utf-8", (err) => {
        if (err) console.log(err);
        else console.log("at home right now");
    });
    else res.write("<h1>There's nothing here mate, stroll somewhere else!</h1> <br> <a href = '/home'>Wanna go home?</a>");
    res.end();

});

// this.myServer.listen(7777); //keywword- 'this' is used because myServer was exported directly