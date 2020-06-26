//just want to say I'm really enjoying node. This is the most fun I've had so far!

//VARIABLES
const inquirer = require("inquirer");
const write = require("./writefile.js");

// array of questions for user
const answerArray = [];
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
        type: "input",
        message: "Please select from the following licenses:",
        name: "license"
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
    console.log("Let's make writing a README.md easy.")
    console.log('Answer the following questions:')
    //use the inquirer package
    inquirer
        //.prompt uses the questions array to ask the user questions
        .prompt(questions)
        .then((answer) => {
            answerArray.push(
                answer.title, 
                answer.description, 
                answer.installation,
                answer.usage,
                answer.license,
                answer.contributing,
                answer.tests,
                answer.questions
                );
            write.writeToFile();
    })
}

// function call to initialize program
init();













    // ## Acceptance Criteria

    // ```md
    // GIVEN a command-line application that accepts user input
    // WHEN I am prompted for information about my application repository
    // THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    // WHEN I enter my project title
    // THEN this is displayed as the title of the README
    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README
    // ```

    // ## Minimum Application Requirements

    // * Meets [Submission Requirements](#submission-requirements) in the following section.

    // * Functional application.

    // * GitHub repository with a unique name and a README describing project.

    // * The generated README includes the following sections: 

    // * Title
    // * Description
    // * Table of Contents
    // * Installation
    // * Usage
    // * License
    // * Contributing
    // * Tests
    // * Questions