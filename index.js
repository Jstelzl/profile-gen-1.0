
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generateSite = require('./src/generate-Team.js');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');

const teamMembers = [];

// Team Manager Info
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email Address:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your Office Number:'
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

// Role Choice menu (engineer, intern, generate team)
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'roleMenu',
            message: 'Please select a role from the menu:',
            choices: ['Engineer', 'Intern', 'Finish & generate team']
        }
    ])
    // determines what to do when one of the following roles is chosen
    .then(roleChoice => {
        switch(roleChoice.roleMenu) {
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

// If engineer is chosen
const promptEngineer = () => {
    console.log(`
    ============
    New Engineer
    ============
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name:"
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter the engineer's employee id number:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email address:"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Enter the engineer's gitHub username:"
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.gitHub);
        teamMembers.push(engineer);
        promptMenu();
    })
};

// If intern is chosen
const promptIntern = () => {
    console.log(`
    ============
    New Intern
    ============
    `)

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name:"
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter the intern's employee id number:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email address:"
        },
        {
            type: 'input',
            name: 'university',
            message: "Enter the intern's university name:"
        },
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.university);
        teamMembers.push(intern);
        promptMenu();
    })
};

// If finsh & generate team (build team) is chosen 
const buildTeam = () => {
    console.log(`
    ======================
    Finish & Generate Team
    ======================
    `);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
};

managerPrompt();