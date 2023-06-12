// Importing all modules
const express = require("express");
const path = require("path");
const { clog } = require('./middleware/clog');

// PORT
const PORT = process.env.PORT || 3001;
const app = express();
// Importing routers
const api = require("./routes/index");

// Middlewate 
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));

app.use(clog);

app.use("/api", api);

// Note.html
app.use("/notes", (req, res) => 
    res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Index.html
app.use("*", (req, res) => 
    res.sendFile(path.join(__dirname, "/public/index.html"))
);

// Main Port
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);