const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
}; 

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if(duplicateNotes.length === 0) {
        notes.push({
            title,
            body 
        });
       saveNotes(notes);
       console.log(`New note added!`);
    } else {
        console.log(`Note title taken!`);
    } 
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

const removeNote = title => {
    const notes = loadNotes();
    const savedNotes = notes.filter((note) => {
        return note.title !== title;
    });
    if(notes.length > savedNotes.length) {
        console.log(`${chalk.green.inverse('Note Removed')}`);
        saveNotes(savedNotes);
    } else {
        console.log(`${chalk.red.inverse('No Note Found!')}`);
    }
    
}

module.exports = {
    getNotes,
    addNote,
    removeNote
};