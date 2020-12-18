const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

//Customiz yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!');
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


console.log(yargs.argv);