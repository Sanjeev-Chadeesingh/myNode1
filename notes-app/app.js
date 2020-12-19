const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

//Customiz yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        console.log('Adding notes!');
    }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing note',
    handler: function() {
        console.log('Removing the note!');
    }
});

//create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function() {
        console.log('Listing notes!');
    }
});

//create read command
yargs.command({
    command: 'read',
    describe: 'Reading notes',
    handler: function() {
        console.log('Reading notes!');
    }
});

//add, remove, read, list NOTES

yargs.parse();
// console.log(yargs.argv);