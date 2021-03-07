const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');



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
        name: 'project',
        message: 'Enter your project name',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project about/tools?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'How is the project used/interacted with?',
      },
      {
        type: 'input',
        name: 'repo',
        message: 'Enter your GitHub repo URL.',
      },
      {
        type: 'input',
        name: 'webpage',
        message: 'Enter your GitHub io URL.',
      },
      {
        type: 'input',
        name: 'picture',
        message: 'Enter your screenshot link',
      },
    ]);
};
  
const createHTML = (answers) =>
'<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
    <title>README.md</title>
  </head>
  <body class="container text-center">
    <h1>${answers.project} ReadME</h1>
    <div class="row">
      <ul class="list-group">
        <li class="list-group-item">Name:${answers.name}</li>
        <li class="list-group-item">GitHub Username:${answers.github}</li>
      </ul>
    </div>

    <h2>Description</h2>
    <p>${answers.description}</p>

    <h3>Usage</h3>
    <p>${answers.instructions}</p>

    <div class="row">
        <h4>View</h4>
        <ul class="list-group">
          <li class="list-group-item">GitHub Repo:${answers.repo}</li>
          <li class="list-group-item">Live Webpage:${answers.webpage}</li>
        </ul>
    </div>
    <link>${answers.picture}
  </body>
</html>';




function init(){
  questions().then((answers) => {
    try {
  const html = createHTML(answers);
  fs.writeFileSync('index.html', html);
  console.log("You have sucessfully created a Readme.md file, review for any potential errors."); 
} catch (error) {
    console.log (error);
}
});
};

init();
