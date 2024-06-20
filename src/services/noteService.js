const Note = require('../models/noteModel');

const getNotes = async () => {
    const notes = await Note.find();
    return notes;
};

const addNote = async (noteData) => {
    const note = new Note(noteData);
    await note.save();
    return note;
};

module.exports = {
    getNotes,
    addNote
};
