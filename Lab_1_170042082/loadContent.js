const aHttp = require("http");
const fileData = require("./readFileModule.js");

module.exports.myServer2 = aHttp.createServer((req, res) => {

// the 2nd and 3rd parameters in response.write() function are optional.
// If writeHead() is not specified than it will auto select the content type and response code.

    if (req.url == "/" ||  req.url == "/home") {
        res.writeHead(201, { "Content-Type": "text/html" });
        res.write(fileData.indexData, "utf-8", (err) => {
            if (err) console.log(err); 
            else console.log("Responded to index");
        });
    } else if (req.url == "/about") {
        res.writeHead(201, { "Content-Type": "text/html" });
        res.write(fileData.aboutData, "utf-8", (err) => {
            if (err) console.log(err);
            else console.log("Responded to /about");
        });
    } else if (req.url == "/blog") {
        res.writeHead(201, { "Content-Type": "text/html" });
        res.write(fileData.blogData, "utf-8", (err) => {
            if (err) console.log(err);
            else console.log("Responded to /blog");
        });
    } else if (req.url == "/contact") {
        res.writeHead(201, { "Content-Type": "text/html" });
        res.write(fileData.contactData, "utf-8", (err) => {
            if (err) console.log(err);
            else console.log("Responded to /contact");
        });
    } else if (req.url == "/pricing"){
        res.writeHead(201, { "Content-Type": "text/html" });
        res.write(fileData.pricingData, "utf-8", (err) => {
            if (err) console.log(err);
            else console.log("Responded to /pricing");
        });
    } else if (req.url == "/services"){
        res.writeHead(201, { "Content-Type": "text/html" });
        res.write(fileData.servicesData, "utf-8", (err) => {
            if (err) console.log(err);
            else console.log("Responded to /services");
        });
    } else if (req.url == "/work"){
        res.writeHead(201, { "Content-Type": "text/html" });
        res.write(fileData.workData, "utf-8", (err) => {
            if (err) console.log(err);
            else console.log("Responded to /work");
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>The page doesn't exist!</h1> <br> <a href = '/'>Wanna go home?</a>");
    }

    res.end();
    
});
