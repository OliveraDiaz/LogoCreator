const fs = require('fs');
const path = require('path');
const shapes = require('./shapes');
const { default: inquirer } = require('inquirer');

//Create an an array of questions for user input in node terminal
const questions = [
    {
        type: 'choice',
        name: 'shape',
        message: 'What shape would you like to create?',
        choices: ['triangle', 'circle','square'],
    },
    {
        type: 'input',
        name: 'Text',
        message: 'What color would you like the text to be?'
    },
    {
        type: 'input',
        name: 'letters',
        message: 'What letters would you like to include in your logo? You can include up to 3 letters.'
        validate: (input) => input.length <= 3,
    },
];
            // create switch statement to determine which shape to create

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    fs.writeTo