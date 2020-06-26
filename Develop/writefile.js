//enables use of fs
const fs = require("fs");

//exports function for use in other js files
module.exports = {
    writeToFile: writeToFile,
};

// function to write README file
function writeToFile(
    title, 
    description, 
    installation, 
    usage, 
    license, 
    contributing, 
    test, 
    question
    ) {
    //use the fs package
    fs.writeFile("newREADME.md", `

# ${title}

## Description 

${description}


## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${installation}


## Usage 



## Credits



## License



## Contributing


## Tests



`, "utf8", function(err){
        if(err) {
            throw err;
        }
        console.log("newREADME.md has been created!");
    })
}
