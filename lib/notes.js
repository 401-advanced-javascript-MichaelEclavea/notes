'use strict';


class Note {
    constructor (obj){
        this.action = obj.action;
        this.payload = obj.payload;
    }
    execute(){
        if( this.action === '--add' || this.action === '-a'){
            this.add();
           
        } 
    }
    add (){
        let newNote = {id: 1, text: this.payload};
        console.log(newNote.text);
    }
}




module.exports = Note;