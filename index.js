const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const { inherits } = require('util');
var questionAry = [{
    message: 'What is your name?',
    name: 'name',
    type: 'input'
},
{
    message: 'What is your email?',
    name: 'email',
    type: 'input'
},
{
    message: 'What is your GitHub username?',
    name: 'username',
    type: 'input'
},
{
    message: 'What is your project title?',
    name: 'projectTitle',
    type: 'input'
},
{
    message: 'Describe your project',
    name: 'description',
    type: 'input'
},
{
    message: 'Installation instructions',
    name: 'installation',
    type: 'input'
},
{
    message: 'Usage information',
    name: 'usage',
    type: 'input'
},
{
    message: 'License',
    name: 'license',
    type: 'list',
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
},
{
    message: 'Contribution guidelines',
    name: 'contribution',
    type: 'input'
},
{
    message: 'What tests did you perform?',
    name: 'tests',
    type: 'input'
}]
inquirer.prompt(questionAry).then(answers => {
    console.log(answers);
    var renderReadMe =
        ` # Name
        ${answers.name}
## Questions/Contact
        ${answers.email}
        ${answers.username}
## Description 
        ${answers.description}
## Installation
        ${answers.installation}
## Usage 
        ${answers.usage}
## License
        ${answers.license}
## Contributing
        ${answers.contribution}
## Tests
        ${answers.tests}
        `

    fs.writeFile("sampleReadme.md", renderReadMe, (err) => err ? console.log(err) : console.log("success"));

});
