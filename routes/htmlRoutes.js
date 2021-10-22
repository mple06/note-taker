const router = require('express').Router();
const path = require('path')

// GET route to homepage
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//get the information from the index.html
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

module.exports = router;