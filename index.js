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

const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Inter');
const Manager = require('./lib/Manager');

const newMemberInfo = [];

// first prompt array for general info
const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your ID number?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is your role?',
                choices: ['Engineer', 'Intern', 'Manager'],
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
        prompt([
            {
                type: 'input',
                message: 'What university did you go to?',
                name: 'university'
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
    return createTeam();
}

promptQ();

function createTeam() {
    console.log('new member', newMemberInfo)
    fs.writeFileSync(
        "",
        generateTeam(newMemberInfo),
        "utf-8"
    );
}