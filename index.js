const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("")

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Inter');
const Manager = require('./lib/Manager');

const newStaffMemberData = [];

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
        ])
}