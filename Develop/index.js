// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
var badge =''
var link = ''
var section =''

const promptUser = () => {
return inquirer.prompt([
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: 'Please describe your project',
    name: 'purpose'
  },
  {
    type: 'input',
    message: 'How do you install this app?',
    name: 'installInstructions'
  },
  {
    type: 'input',
    message: 'How do you use this app',
    name: 'useInstructions'
  },
  {
    type: 'input',
    message: 'How can somebody contribute to this project?',
    name: 'contribute'
  },
  {
    type: 'input',
    message: 'How can this app be tested?',
    name: 'testing'
  },
  {
    type:'list',
    message: 'What kind of license would you like to use?',
    name: 'license',
    choices: ['none', 'MIT', 'Apache License 2.0'],
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
  ]);
};

const generateReadMe = ({projectTitle, purpose, installInstructions, useInstructions, contribute, testing, licenseType, github, email, badge, link, section}) =>
`# ${projectTitle}
${badge}
## Table of Contents 
Description
Installation Instruction
Usage Instructions
License 
Contributing
Testing
Questions

## Description
${purpose}

## Installation Instruction
${installInstructions}

## User Instruction 
${useInstructions}

## License 
${licenseType}

## Contributing
${contribute}

## Testing
${testing}

## License 
${section}
${link}

## Questions
If you have any questions email me at: ${email}
Check out my Github page: www.github.com/${github}`;

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('README1.md', generateReadMe(answers)))
    .then(() =>console.log('Successfully wrote to README1.md'))
    .catch((err) => console.log(err))
  };

  init()

//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
// };
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
// //       err ? console.log(err) : console.log('Success!')
// //     );


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
