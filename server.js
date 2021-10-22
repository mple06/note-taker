const htmlRoutes = require('./routes/htmlRoutes');
const notesRoutes = require('./routes/notesRoutes');
const express = require("express");
const app = express();
const path = require("path");
const router = require('express').Router();
const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//tells the server to look in the public folder
app.use(express.static("public"))

app.use('/api', notesRoutes);
app.use('/', htmlRoutes);

//listening to port
app.listen(PORT, () => {
    console.log("Listening to port" + PORT)
})
