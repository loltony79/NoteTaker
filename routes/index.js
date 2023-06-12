// Importing all the files
const express = require("express");
const notesRouter = require("./notes");
const app = express();

// Use notes 
app.use("/notes", notesRouter);

// Exporting app to server.js
module.exports = app;