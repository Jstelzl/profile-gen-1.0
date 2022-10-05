// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generate.js');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');

const newMemberInfo = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name: '
        },
        {
            type: 'input',
            name: 'memberId',
            message: 'Enter your employee ID: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email Address: '
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your Office Number: '
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.memberId, answers.email, answers.officeNumber);
        teamMember.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'roleMenu',
            message: 'Please select a role from the menu.',
            choices: ['Engineer', 'Intern', 'Finish & generate team']
        }
    ])
    
    .then(userChoice => {
        switch(userChoice.menu) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            default:
                buildTeam();
                
        }
    });
    

};


if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath, generateTeam(newMemberInfo), "utf-8");

//module.exports = newMemberInfo;