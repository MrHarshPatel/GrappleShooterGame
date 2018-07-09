
//Stores express function in a variable
var express = require('express');

//Stores an express function call in a variable called app
var app = express();

//Runs express function call on port 3000
var server = app.listen('3000');

//Tells express to use static files from public folder
app.use(express.static('public'));

console.log("[Socket Server] Running");
