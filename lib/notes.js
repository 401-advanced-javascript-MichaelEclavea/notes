'use strict';

const NotesModel = require('./models/notes-collection.js');
const activateFunction = new NotesModel();
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
        } else if ( this.action === '--delete') {
            console.log('Deleting...', this);
            this.delete();
        } else if ( this.action === '--lists'){
            console.log('adding to list...', this);
            this.list();
        }
    }
    add () {
        return activateFunction.add(this);
    }

    list(){
        return activateFunction.list(this.payload);
    }
    delete(){
        return activateFunction.delete(this.payload);
    }
 }

module.exports = Note;