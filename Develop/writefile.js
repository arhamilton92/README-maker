//enables use of fs
const fs = require("fs");

//exports function for use in other js files

module.exports = {
    writeToFile: writeToFile
};

// function to write README file
function writeToFile() {
    //use the fs package
    fs.writeFile("newREADME.md", ``, "utf8", function(err){
        if(err) {
            throw err;
        }
        console.log("newREADME.md has been created!");
    })
}
