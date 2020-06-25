const fs = require("fs");


// array of questions for user
const questions = [
        //npm inquirer documentation objects

];

// function to write README file
function writeToFile(fileName, data) {
    //use the fs package
}

// function to initialize program
function init() {
    //use the inquirer package
}

// function call to initialize program
init();

fs.writeFile("newREADME.md", "# This is a readme file", function(err){
    if (err) {
        throw err;
    }
    console.log("Wrote the file");

});