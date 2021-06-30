const osInfo = require("os");

const myUserInfo = osInfo.userInfo(); //will only describe the function without the parentheses
console.log(myUserInfo);
console.log(osInfo.uptime());

const currentOS = {
    osName: osInfo.type(),
    osRelease: osInfo.version(),
    osVersion: osInfo.version(),
    totMem: osInfo.totalmem(),
    freemem: osInfo.freemem() //comma here is optional
};

console.log(currentOS);