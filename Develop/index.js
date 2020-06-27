//just want to say I'm really enjoying node. This is the most fun I've had coding so far!

//VARIABLES
const fs = require("fs");
const inquirer = require("inquirer");
const write = require("./writefile.js");
let license = "";

//array of questions to prompt user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description"
    },
    {
        type: "input",
        message: "How is your application installed?",
        name: "installation"
    },
    {
        type: "input",
        message: "Describe how to use your program.",
        name: "usage"
    },
    {
        type: "list",
        message: "What type of license would you like to use?",
        choices: [
            "GNU General Public License", new inquirer.Separator(), 
            "Mozilla Public License", new inquirer.Separator(), 
            "MIT License", new inquirer.Separator(), 
            "Boost Software License"
        ],
        name: "licensing"
    },
    {
        type: "input",
        message: "What are the contribution guidelines for this project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How can users test your application?",
        name: "tests"
    },
    {
        type: "input",
        message: "How can users reach you for additional questions?",
        name: "questions"
    }
];

// function to initialize program
function init() {
    //intro
    console.log('Hello! Welcome to README maker.')
    console.log("Let's make writing a README easy.")
    console.log('Enter the following information:')
    //use the inquirer package
    inquirer
        //.prompt uses the questions array to ask the user questions
        .prompt(questions)
        .then((answer) => {
            console.log(answer);
            getLicense(answer);
            //sets info to parameters for use in writeToFile
            answer.title
            write.writeToFile(answer, license)
            })
        
}

function getLicense(answer) {
    console.log('inside getlicense function')
    license = answer.licensing;
    switch(license) {
        case "GNU General Public License": 
        license =
`Application is licensed under the GNU General Public License.
[license link](https://choosealicense.com/licenses/gpl-3.0/)`;
        break;
        case "Mozilla Public License":
            license = 
`Application is licensed under the Mozilla Public License.
[license link](https://choosealicense.com/licenses/mpl-2.0/)`;
            break;
            case "MIT License":
                license = 
`Application is licensed under the MIT License.
[license link](https://choosealicense.com/licenses/mit/)`;
                break;
                case "Boost Software License":
                license = 
`Application is licensed under the Boost Software License.
[license link](https://choosealicense.com/licenses/bsl-1.0/)`;
                break;               
    }
    console.log(license)
}
//FUNCTION CALLS
init();