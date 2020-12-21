const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');

//add, remove, list, and read via yargs!

yargs.command({
    command: 'add',
    description: 'adds a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        console.log(`${argv.title} added`);
    }
})

yargs.parse();