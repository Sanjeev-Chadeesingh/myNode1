const getNotes = require('./notes');
const chalk = require('chalk');

const msg = getNotes();

console.log(chalk.redBright.bold.bgGreen(msg));
console.log(chalk.greenBright.bold.bgRed('Success!'));