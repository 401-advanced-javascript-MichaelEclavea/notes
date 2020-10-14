'use strict';

class Input{
    constructor (argv){
        this.action = argv[2];
        this.payload = argv[3];
    }

    valid(){
        if(this.action === '-a' || this.action === '--add') {
            console.log('This is a valid entry to notes');
            return true;
        } else if(this.action !== '-a' || this.action !== '--add') {
            console.log('something is wrong with input');
            return false;
        } else if (this.payload !== ''){
            return false;
        } 
        else {
            console.error('There was an error', error);
            return false;
        }
    }

}




module.exports = Input;