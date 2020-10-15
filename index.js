
'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');



const input = require('./lib/input.js');
const note = require('./lib/notes.js');

// const testInput = require('./__tests__/input.test.js');
// const testNotes = require('./__tests__/notes.test.js');


app.get('./status', (request, response) => {
  const currentStatus = status(request);
  response.status(200).json(currentStatus);
});

mongoose.connect('mongodb://localhost:27017/noteDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) .then(() => console.log('We are connected to Mongo'));

let argv = process.argv;

let newNote = new input(argv);

let object = new note(newNote);

console.log(object);
object.execute();

app.listen(process.env.PORT, () => console.log('server up') );