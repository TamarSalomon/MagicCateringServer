const express = require('express');
const router = express.Router();
const notesController = require('../Controllres/notes.Controller');



router.get('/getNotes',notesController.getNotes);//OK
router.post('/addNote',notesController.addNote);//OK

module.exports = router;
