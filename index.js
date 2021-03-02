// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileSync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'project name',
        message: 'Enter your Project name',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project about?',
      },
      {
        type: 'input',
        name: 'GitHub Repo',
        message: 'Enter your GitHub repo URL.',
      },
      {
        type: 'input',
        name: 'Live webpage',
        message: 'Enter your GitHub io URL.',
      },
      {
        type: 'input',
        name: 'Project picture',
        message: 'Enter your screenshot link',
      },
    ]);
  };
  
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
