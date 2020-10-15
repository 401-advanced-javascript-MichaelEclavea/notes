'use strict';

const NotesModel = require('./models/notes-schema.js');
const mongoose = require('mongoose');

class Note {
    constructor (obj){
        this.action = obj.action;
        this.payload = obj.payload;
        this.category = obj.category;
    }
    execute(){
        if( this.action === '--add' || this.action === '-a'){
            this.add();
        } 
    }
    add (){
        const newNote = new NotesModel({
            text: this.payload,
            category: this.category,
        })

        newNote.save()
        .then(note =>{
            console.log('This is note that was saved', note);
           
        }) 
        
        .catch(console.log);
    }
}




module.exports = Note;