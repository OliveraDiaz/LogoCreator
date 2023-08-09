const fs = require('fs');
const path = require('path');
const shapes = require('./Lib/shapes');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./Lib/shapes');



//Create an an array of questions for user input in node terminal
const questions = [
    {
        type: 'list',
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
        // validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'background',
        message: 'What color would you like the background to be?'
    },
];

// write a functions that will ask the user the array of questions and then write the answers to a file

function promptUser() {
    return inquirer.prompt(questions);
}

// q: write a function that will take the user's answers and write them to a file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
promptUser().then((answers) => {
    console.log(answers);
    let shape;
    if (answers.shape === 'triangle') {
        shape = new Triangle();
    } else if (answers.shape === 'circle') {
        shape = new Circle();
    } else {
        shape = new Square();
    }
    shape.setColor(answers.Text);
    console.log(shape);
    shape.setBackground(answers.background);
    shape.setText(answers.letters);
let fileText = shape.render()
writeToFile('index.html', fileText);

// console.log(fileText);
console.log('Success! Your logo has been created!');
});


