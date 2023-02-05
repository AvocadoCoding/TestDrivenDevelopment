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



// array of questions for user- manager
const questionsManager = [
    {
        type: 'input',
        message: 'What is the team manager\'\s name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the team manager\'\s Employee ID?',
        name: 'EmployeeID',
      },
      {
        type: 'input',
        message: 'What is the team manager\'\s Email address?',
        name: 'eMail',
      },
      {
        type: 'input',
        message: 'What is the team manager\'\s office number?',
        name: 'officeNumber',
      },
];

// array of question for next step
const questionsNextStep = [
      {
        type: 'checkbox',
        message: 'Which type of team member would you like to add?',
        name: 'stack',
        choices: ['Engineer', 'Intern', 'I dont want to add any more team members'],
      },
];

// array of questions for user- engineer
const questionsEngineer = [
    {
        type: 'input',
        message: 'What is the engineer\'\s name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the engineer\'\s Employee ID?',
        name: 'EmployeeID',
      },
      {
        type: 'input',
        message: 'What is the engineer\'\s Email address?',
        name: 'eMail',
      },
      {
        type: 'input',
        message: 'What is the engineer\'\s office number?',
        name: 'officeNumber',
      },
];

// array of questions for user- engineer
const questionsIntern = [
    {
        type: 'input',
        message: 'What is the intern\'\s name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the intern\'\s Employee ID?',
        name: 'EmployeeID',
      },
      {
        type: 'input',
        message: 'What is the intern\'\s Email address?',
        name: 'eMail',
      },
      {
        type: 'input',
        message: 'What is the intern\'\s office number?',
        name: 'officeNumber',
      },
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

    buildTeam(readmeName, finalString)
    })
}

// function call to initialize program
init()