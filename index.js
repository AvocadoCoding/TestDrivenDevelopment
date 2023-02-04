// Call in information from otehr js files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Use inquirer module for user input prompt
const inquirer = require("inquirer");

// module provides utilities for working with file and directory paths
const path = require("path");


// fs is a Node standard library package for reading and writing files
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.



// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please describe the project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What knowledge does the user need to run the repository?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please enter contribution guidelines',
        name: 'contribution',
      },
      {
        type: 'checkbox',
        message: 'Please choose your project license',
        name: 'stack',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'GitHubURL',
      },
      {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'eMail',
      }
];

// function to write HTML file
function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
  
    const readmeName = `README.md`

    const finalString = generateMarkdown(data);

    writeToFile(readmeName, finalString)
    })
}

// function call to initialize program
init()