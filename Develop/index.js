//just want to say I'm really enjoying node. This is the most fun I've had coding so far!

//VARIABLES
const fs = require("fs");
const inquirer = require("inquirer");
const write = require("./writefile.js");

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
    console.log("Let's make writing a README easy.")
    console.log('Enter the following information:')
    //use the inquirer package
    inquirer
        //.prompt uses the questions array to ask the user questions
        .prompt(questions)
        .then((answer) => {
            //sets info to parameters for use in writeToFile
            write.writeToFile(
                answer.title, 
                answer.description, 
                answer.installation, 
                answer.usage, 
                answer.license, 
                answer.contributing, 
                answer.test, 
                answer.question);
            })
        
}

//FUNCTION CALLS
init();