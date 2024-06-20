const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');



router.get('/',noteController.getNotes);
router.post('/addNote',noteController.addNote);

module.exports = router;
