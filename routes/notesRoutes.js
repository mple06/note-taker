const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const express = require('express');
const uuid = require("../helpers/uuid")

let notes = require('../db/db.json');
const { route } = require('./htmlRoutes');

router.get('/notes', (req, res) => {
    notes = JSON.parse(fs.readFileSync('./db/db.json', "utf-8"))
    res.json(notes)
})

router.post("/notes", (req, res) => {
    // console.log(req.body);
    const { title, text } = req.body;
    const newNote = { title, text, id: uuid() }
    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 4));
    res.json(notes)
})

router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    notes = notes.filter((remove) => remove.id !== id);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 4));
    res.json(notes)
});

module.exports = router;