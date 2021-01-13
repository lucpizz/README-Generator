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
    type: "list",
    name: "license",
    message: "Please select a license:",
    choices: ["MIT", "Apache"],
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

/*
const promptUser = () => {
  return inquirer.prompt(questions);
};

 TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(filename, data)


}


// TODO: Create a function to initialize app
function init() {
  //console.log(colors.green("This is cool and is also from Colors"));
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
  });
}
*/

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const createReadme = markDown(answers);
    await writeFileAsync("README.md", markDown);
    console.log("Successfully wrote README.md");
  } catch (error) {
    console.log(error);
  }
};

// Function call to initialize app
init();
