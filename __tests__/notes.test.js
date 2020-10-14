'use strict';

const Note = require('../lib/notes.js');

const spy = jest.spyOn(console, 'log').mockImplementation();

describe('Nothing is logged to the console if there was no command given', () =>{
    beforeEach(() =>{
        spy.mockClear();
    })
    test('will validate the console is clear if entry is invalid',() =>{
       let result = new Note ({action: 'a', payload: 'This is note test one is not correct'});
       result.execute();
       expect(console.log).toBeCalledTimes(0);
    })
    test('If objects is valid the receive console log', () =>{
        let result2 = new Note ({action: '-a', payload: 'this test correct is test'});
        result2.execute();
        expect(console.log).toBeCalledTimes(1);
    })
 
})

