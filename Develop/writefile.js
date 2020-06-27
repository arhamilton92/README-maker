//enables use of fs
const fs = require("fs");

//exports function for use in other js files
module.exports = {
    writeToFile: writeToFile,
};

// function to write README file
function writeToFile(answer, license) {
    //use the fs package
    fs.writeFile("newREADME.md", `

# ${answer.title}

## Description 

${answer.description}


## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${answer.installation}

## Usage 

${answer.usage}

## License

${license}

## Contributing

${answer.contributing}

## Tests

${answer.tests}


`, "utf8", function(err){
        if(err) {
            throw err;
        }
        console.log("newREADME.md has been created!");
    })
}
