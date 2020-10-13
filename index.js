
'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

const input = require('./lib/input.js');
const note = require('./lib/notes.js');
let argv = process.argv;

let newNote = input(argv);

let object = new note(newNote);

console.log(object);

app.get('./status', (request, response) => {
  const currentStatus = status(request);
  response.status(200).json(currentStatus);
});

app.listen(process.env.PORT, () => console.log('server up') );