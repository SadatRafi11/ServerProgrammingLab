const helloWorld = require("./helloWorld"); //this will cause the entire helloWorld module to run once

//import(helloWorld);

// console.log(module);

// console.log(helloWorld);

//setInterval for a function
let myInterval = setInterval(()=> {
    helloWorld.hello();
}, 1000);

//Interval clearing function
function stopTheWheel() {
    clearInterval(myInterval);
}

//setTimeout for a function
let myTimout = setTimeout(()=> {
    console.log("stop");
    stopTheWheel();
}, 3000);