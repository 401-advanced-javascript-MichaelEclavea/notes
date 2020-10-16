'use strict';

const mongoose = require('mongoose');

const RequestModel = require('./notes-schema.js');



class Crud {
    constructor(){
        this.model = RequestModel;
    }

    list(categoryName) {
       
        this.model.find({category: categoryName}).then(info =>{
            console.log(info);
        });
    }

    add (note){
        let newNote = new this.model({
            text: note.payload,
            category: note.category,
        })

        newNote.save()
        .then(note =>{
            console.log('This is note that was saved', note);
           
        }) 
        
        .catch(console.log);
    }

    delete(id){
     this.model.deleteOne({_id: id}, function (err){ console.log(err)});

    }
}

module.exports = Crud; 

