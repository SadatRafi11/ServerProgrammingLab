
const myFS = require("fs"); //won't work without the quotation mark
// console.log(myFS);


//not using sync will require us to write an extra callback parameter in every function below

let sampleStr = "We are learning pure JS. "

//creating a file and inserting data
myFS.writeFile("./Contents/DemoFile.txt", sampleStr, (err) => {
    if (err) console.log(err);
    else console.log("Success!");
});

sampleStr = "And nodeJs too! "

//appending right after what's in a file.
myFS.appendFile("./Contents/DemoFile.txt", sampleStr, (err) => {
    if (err) console.log(err);
    else console.log("Successfully appended!");
});

//renaming a file
myFS.rename("./Contents/DemoFile.txt", "./Contents/RenamedFile", (err) => {
    if (err) console.log(err);
    else console.log("Successfully Renamed!");
});

console.log("Before!"); //this will be printed before the fs calls written above being asynchronous in nature!

sampleStr = "Is it a synchronous process?";
//reading a file
myFS.readFile("./Contents/RenamedFile", "utf-8", (err, data) => {
    if (err) console.log(err);
    else {
        console.log(data);
        myFS.appendFile("./Contents/RenamedFile", sampleStr, (err) => {
            if (err) console.log(err);
            else {
                myFS.readFile("./Contents/RenamedFile", "utf-8", (err, data) => {
                    if (err) console.log(err);
                    else console.log(data); //this will print only the last line because myFS.unlink will be asynchronously running before this! So, previous two lines will be deleted.
                });
            };
        });
    }
});

console.log("After!"); //this will be done before the filesystem calls finishes as they are asynchronous!

//deleting file might cause the code above to run into some error. As the processses are asynchronous, a file might get deleted before it gets read by the readFile method.
myFS.unlink("./Contents/RenamedFile", (err) => {
    if (err) console.log(err);
    else console.log("Deleted Successfully!");
});


