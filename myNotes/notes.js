const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');


const toValidate = (str) => {
    if(validator.isEmail(str)) {
        console.log(chalk.green(str) + ' Success!')
    } else {
        console.log(chalk.red(str + ' Failure!'));
    }
};

module.exports = toValidate;