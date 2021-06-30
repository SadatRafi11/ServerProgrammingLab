module.exports.hello = (name = 'World')=> { //no use of the keyword- 'const' here
    console.log(`Hello ${name}!`);
};

this.hello('sadat'); //It will cause error without the keyword- 'this'

module.exports.usr = "sadat"; //no use of the keyword- 'let' here!

console.log(this.usr); //It will cause error without the keyword- 'this'

// module.exports = { hello, usr }; //don't need it when we directly export!

console.log(module);