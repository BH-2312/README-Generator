// variables required for inquirer and fs
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user //
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project?"
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application?"
  },
  {
    type: "input",
    name: "contribution",
    message: "How do you contribute to your application?"
  },
  {
    type: "input",
    name: "tests",
    message: "What tests were completed to ensure the application works?"
  },
  {
    type: "list",
    message: "What license do you want for your application?",
    name: "license",
    choices: [
      "license1",
      "license2",
      "license3"
    ]
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
];

// function to write README file
function writeToFile(data) {
  return `# Title
  
${data.title}
     
# Description

${data.description}

* Table of Contents

* Installation

    ${data.installation}

    * Usage

    ${data.usage}

    * License

    ${data.license}
    
    * Contributing

    ${data.contribution}

    * Tests

    ${data.tests}
    
    * Questions?

    PLease contact me at:
    GitHub: ${data.github}
    Email: (${data.email})`;
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      const readMe = writeToFile(data);
      fs.writeFile("README.md", readMe, function (err) {

        if (err) {
          return console.log(err);
        }

        console.log("Successfully wrote to README.md!")
      })
    })
}

// function call to initialize program
init();
