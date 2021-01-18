// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);
//const colors = require("colors");
const markDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the title of your Repository and/or Project: ",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a project description: ",
  },
  {
    type: "input",
    name: "installation_instructions",
    message: "Please enter your projects installation instructions: ",
  },
  {
    type: "input",
    name: "usage_information",
    message: "Please enter your usage information: ",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license type: ",
    choices: [
      "apache-2.0",
      "gpl-3.0",
      "mit",
      "bsd-2-clause",
      "bsd-3-clause",
      "mpl-2.0",
      "The-Unlicensed",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter your contribution: ",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter your test instructions: ",
  },
  {
    type: "input",
    name: "questions",
    message: "Please enter your questions: ",
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

//Function to prompt user the questions and get their responses to generate README.md

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const createReadme = markDown(answers);
    await writeFileAsync("Test_README_v1.md", createReadme);
    console.log("Successfully wrote README.md");
  } catch (error) {
    console.log(error);
  }
};

// Function call to initialize app
init();
