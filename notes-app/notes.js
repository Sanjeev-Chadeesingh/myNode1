const fs = require('fs');

const getNotes = () => {
    return 'Your notes...';
} 

const addNote = (title, body) => {
    const notes = loadNotes();
    console.log(notes);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(err) {
        return [];
    }
    
}

module.exports = {
    getNotes,
    addNote
};