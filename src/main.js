const main_controller = require('./main_controller.js');
const fs = require('fs');
const app = require('./app.js');
const chalk = require('chalk');

let output = main_controller.main();
console.log(chalk.green("Processing input.txt"));

fs.writeFileSync('output.txt',output);
console.log(chalk.green("Successfully processed, check output.txt for results!"));