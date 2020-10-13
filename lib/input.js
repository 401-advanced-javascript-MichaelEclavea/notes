'use strict';


function Note(argv){
    this.action = argv[2];
    this.payload = argv[3];
}

function userInput (argv){
    if(argv[2] === '-a' || argv[2] === '--add') {
        console.log('This is a valid entry to notes');
        return new Note(argv);
    } else if(argv[2] !== '-a' || argv[2] !== '--add') {
        console.log('something is wrong with input');
    } else {
        console.error('There was an error', error);
    }
}



module.exports = userInput;