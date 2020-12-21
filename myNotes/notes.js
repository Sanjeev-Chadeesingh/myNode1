const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');
const fs = require('fs');

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
    } catch(err) {
        return [];
    }
}

module.exports = toValidate;