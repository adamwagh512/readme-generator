// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
} = require("./utils/generateMarkdown");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Please describe your project",
      name: "purpose",
    },
    {
      type: "input",
      message: "How do you install this app?",
      name: "installInstructions",
    },
    {
      type: "input",
      message: "How do you use this app",
      name: "useInstructions",
    },
    {
      type: "input",
      message: "How can somebody contribute to this project?",
      name: "contribute",
    },
    {
      type: "input",
      message: "How can this app be tested?",
      name: "testing",
    },
    {
      type: "list",
      message: "What kind of license would you like to use?",
      name: "license",
      choices: ["none", "MIT", "Apache License 2.0"],
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
};

const generateReadMe = ({
  projectTitle,
  purpose,
  installInstructions,
  useInstructions,
  contribute,
  testing,
  license,
  github,
  email,
  badge,
  link,
  section,
}) =>
  `# ${projectTitle}
${renderLicenseBadge(license)}
## Table of Contents 

[Description](#description)

[Installation](#installation-instructions)

[User Instructions](#user-instructions)


[Contributing](#contributing)

[Testing](#testing)



[Questions](#questions)

## Description
${purpose}

## Installation Instructions
${installInstructions}

## User Instructions 
${useInstructions}

## Contributing
${contribute}

## Testing
${testing}

## License 
${renderLicenseSection(license)}
To learn more about this license please visit: ${renderLicenseLink(license)}

## Questions
If you have any questions email me at: ${email}
Check out my Github page: www.github.com/${github}`;

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync("README1.md", generateReadMe(answers)))
    .then(() => console.log("Successfully wrote to README1.md"))
    .catch((err) => console.log(err));
};

init();
