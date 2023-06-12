// Importing router
const notes = require("express").Router();
// Importing helper functions
const uuid = require("../helper/uuid");
const {readFromFile, readAndAppend} = require("../helper/fsUtils");

// Printing all the data in the json file
notes.get("/", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// Adding data into the json file  
notes.post("/", (req, res) => {
    const {title, text} = req.body;
    // Check if there is a title and text
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid()
        };
        // Append to json file
        readAndAppend(newNote, "./db/db.json");
        res.json("Notes added")
    } else {
        res.errored("Error");
    }
});

// Exporting notes router 
module.exports = notes;
