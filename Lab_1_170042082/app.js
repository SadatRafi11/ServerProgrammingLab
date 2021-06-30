const newServer = require("./httpModule");

// The call back funtions here are optional.

newServer.myServer.listen(7777, () => {
    console.log("Up and running 7777...")
});

const newServer2 = require("./loadContent.js");

newServer2.myServer2.listen(2082, () => {
    console.log("Up and Running 2082...")
});
