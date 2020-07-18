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
    message: "What are steps required to install your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application?"
  },
  {
    type: "input",
    name: "contribution",
    message: "Do you allow others to contribute to your application? If so, how?"
  },
  {
    type: "input",
    name: "tests",
    message: "What tests were completed to ensure the application works?"
  },
  {
    type: "list",
    message: "What license do you wish to select for your application?",
    name: "license",
    choices: [
      "MIT License",
      "GNU GPL v3.0",
      "ISC License"
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
  return `# ${data.title}
     
## Description

${data.description}

## Table of Contents

* [Installation](##installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions?](#questions)


## Installation

${data.installation}

## Usage

${data.usage}

## License

This application is covered under ${data.license}
    
## Contributing

${data.contribution}

## Tests

${data.tests}
    
## Questions?

Please contact me at:

GitHub: github.com/${data.github}

Email: ${data.email}`;
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
