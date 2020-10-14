'use strict';


const Input = require("../lib/input.js");



describe('Check valid method returns true', () =>{
    test('will validate the input module creates a new instance of both action and payload',() =>{
        let result = new Input([0, 1, '-a', 'testing valid payload']);
     expect(result.valid()).toStrictEqual(true);
     let result2 = new Input([0, 1, '--add', 'testing valid payload']);
     expect(result2.valid()).toStrictEqual(true);
    })
  
    test('If input value in not a valid entry return false',() =>{
        let result = new Input([0, 1, '-b', 'testing valid payload']);
        expect(result.valid()).toStrictEqual(false);
    })
    // test('If input payload is not a valid entry return false',() =>{
    //     let result = new Input([0, 1, '-a']);
    //     expect(result.valid()).toStrictEqual(false);
    // })
})

