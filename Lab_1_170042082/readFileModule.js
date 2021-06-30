const myFS2 = require("fs");



//  module.exports.indexData = myFS2.readFileSync("./HTML/index.html", "utf-8");
//  module.exports.aboutData = myFS2.readFileSync("./HTML/about.html", "utf-8");
//  module.exports.blogData = myFS2.readFileSync("./HTML/blog.html", "utf-8");
//  module.exports.contactData = myFS2.readFileSync("./HTML/contact.html", "utf-8");
//  module.exports.pricingData = myFS2.readFileSync("./HTML/pricing.html", "utf-8");
//  module.exports.servicesData = myFS2.readFileSync("./HTML/services.html", "utf-8");
//  module.exports.workData = myFS2.readFileSync("./HTML/work.html", "utf-8");


myFS2.readFile("./HTML/index.html", "utf-8", (err, data) => {
    if (err) console.log(err);
    else module.exports.indexData = data;
});

myFS2.readFile("./HTML/about.html", "utf-8", (err, data) => {
    if (err) console.log(err);
    else module.exports.aboutData = data;
});

myFS2.readFile("./HTML/blog.html", "utf-8", (err, data) => {
    if (err) console.log(err);
    else module.exports.blogData = data;
});

myFS2.readFile("./HTML/contact.html", "utf-8", (err, data) => {
    if (err) console.log(err);
    else module.exports.contactData = data;
});

myFS2.readFile("./HTML/pricing.html", "utf-8", (err, data) => {
    if (err) console.log(err);
    else module.exports.pricingData = data;
});

myFS2.readFile("./HTML/services.html", "utf-8", (err, data) => {
    if (err) console.log(err);
    else module.exports.servicesData = data;
});

myFS2.readFile("./HTML/work.html", "utf-8", (err, data) => {
    if (err) console.log(err);
    else module.exports.workData = data;
});
