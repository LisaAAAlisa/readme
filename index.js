// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
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
    message: "What command should be run to install dependencies?",
    name: "dependencies",
    type: "input"
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

        ## Description 
        ${answers.description}

        ## Installation
        ${answers.installation}

        ## Usage 
        ${answers.usage}

        ## Credits
        ${answers.credits}

        ## License
        ${answers.license}

        ## Contributing
        ${answers.contributions}

        ## Tests
        ${answers.tests}
        `
        
fs.writeFile("readme.md", renderReadMe, (err) => err ? console.log(err) :console.log("success"));

});

