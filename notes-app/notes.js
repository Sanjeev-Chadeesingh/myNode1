const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
}; 

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(err) {
        return [];
    }  
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if(!duplicateNote) {
        notes.push({
            title,
            body 
        });
       saveNotes(notes);
       console.log(`${chalk.green.inverse('New Note Added')}`);
    } else {
        console.log(`${chalk.red.inverse('Note Title Taken')}`);
    } 
};

const removeNote = title => {
    const notes = loadNotes();
    const savedNotes = notes.filter((note) => note.title !== title);
    if(notes.length > savedNotes.length) {
        console.log(`${chalk.green.inverse('Note Removed')}`);
        saveNotes(savedNotes);
    } else {
        console.log(`${chalk.red.inverse('No Note Found!')}`);
    }
    
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes...'));
    for(let note of notes) {
        console.log(`${chalk.red('Title:')} ${chalk.green(note.title)}`);
    };
};

const readNote = title => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);
    if(noteToRead) {
        console.log(chalk.inverse('Fetching note...'));
        console.log(`${chalk.green.inverse(noteToRead.title)} : ${chalk.green(noteToRead.body)}`);
    } else {
        console.log(chalk.red('No note matching that title.'));
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};