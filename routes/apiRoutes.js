const router = require('express').Router();
const dbstore = require('../db/dbstore');

router.get('/notes', (req, res) => {
    dbstore
    .getAllNotes()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((error) => res.status(500).json(error))
})

module.exports = router;