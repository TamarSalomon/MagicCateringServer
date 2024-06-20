const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    userName: String,
    email: String,
    notes: String,
  });
  module.exports = mongoose.model('Note', NoteSchema );
  