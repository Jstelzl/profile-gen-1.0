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

// first prompt array for general info
const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter team member's name.",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is your team member's ID number?",
                name: 'id'
            },
            {
                type: 'input',
                message: "Enter team member's emil.",
                name: 'email'
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is your role?',
                choices: ['Engineer', 'Intern', 'Manager']
            }
        ])

    // If Manager had been chosen
    if (answers.role === 'Manager') {
        const managerAnswers = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your office number',
                    name: 'officeNumber'
                },
            ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAnswers.officeNumber
        );
        newMemberInfo.push(newManager);


    } else if (answers.role === 'Engineer') {
        const githubAnswers = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your Github username?',
                    name: 'githubuser',
                }
            ])
        const newEnineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubAnswers.githubuser
        );
        newMemberInfo.push(newEnineer);

    } else if (answers.role === 'Intern') {
        const internAnswers = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What university did you attend?',
                    name: 'university',
                }
            ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAnswers.university
        );
        newMemberInfo.push(newIntern);
    }
};

async function promptQ() {
    await questions()

    const addMemeberAnswers = await inquirer
        .prompt([
            {
                name: 'addMember',
                type: 'list',
                choices: ['Add new member', 'Create team'],
                message: "What's next?"
            }
        ])
    if (addMemeberAnswers.addMember === 'Add new member') {
        return promptQ()
    }
    return generateTeam();
}

promptQ();

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath, generateTeam(newMemberInfo), "utf-8");

//module.exports = newMemberInfo;