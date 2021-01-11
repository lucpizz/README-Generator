// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your Repository and/or Project?",
  },
  {
    type: "input",
    name: "project_description",
    message: "Please create a project description: ",
  },
  {
    type: "input",
    name: "installation_instructions",
    message: "Please create your projects installation instructions: ",
  },
  {
    type: "input",
    name: "license",
    message: "Please select a license: ",
  },
  {
    type: "input",
    name: "github",
    message: "Please, enter your GitHub Username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address: ",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
