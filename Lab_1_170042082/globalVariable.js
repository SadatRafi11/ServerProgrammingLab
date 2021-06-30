//__dirname is path to current directory

const currentDirectory = __dirname;
console.log("Current path is " + currentDirectory);

//__filename is current filename
console.log("File name is " + __filename);

//require() is a function that provides us with a module
//you can write "module" or just module
console.log(require("fs")); // fs for filesystem module

//module provides info on current module
// console.log(module);

//process provides us with info on environment
console.log(process);

