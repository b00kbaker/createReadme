const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "date",
      message: "What is the date?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "project",
      message: "Enter your project name",
    },
    {
      type: "input",
      name: "description",
      message: "What is your project about/tools?",
    },
    {
      type: "input",
      name: "instructions",
      message: "How is the project used/interacted with?",
    },
    {
      type: "input",
      name: "repo",
      message: "Enter your GitHub repo URL.",
    },
    {
      type: "input",
      name: "webpage",
      message: "Enter your GitHub io URL.",
    },
    {
      type: "input",
      name: "picture",
      message: "Enter your screenshot link",
    },
  ]);
};

const createHTML = (answers) =>
  `## ${answers.project}
  
  ## Description 
  
  *The what, why, and how:* 
   ${answers.description}

  
  *Instructions for use:*
   ${answers.instructions}

  ## View
  * GitHub Repo: ${answers.repo}
  * Deployed Webpage: ${answers.webpage}
  * Image: ${answers.picture}
  

  
  ---
  
  ## Developer
    ${answers.name}
    GitHub Username:${answers.github}
    ${answers.date}`;

;


function init() {
  questions().then((answers) => {
    try {
      const html = createHTML(answers);
      fs.writeFileSync("README.md", html);
      console.log(
        "You have sucessfully created a Readme.md file, review for any potential errors."
      );
    } catch (error) {
      console.log(error);
    }
  });
}

init();
