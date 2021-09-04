const markov = require('./markov');

// definitions for use in all Markov Machine tests
let text;
let chain;
let mm;

// setup
beforeEach(() => {
    text = "the cat in the hat is in the hat"
    mm = new markov.MarkovMachine(text);
    chain = { 
        the: [ 'cat', 'hat' ], 
        cat: [ 'in' ], 
        in: [ 'the', 'the' ],
        hat: [ 'is', null ],
        is: [ 'in' ]
    }
});

// teardown
afterEach(() => {
    text = ""
    chain = {}
});

describe('makeChain function', () => {
    test('inputting sample text should output a chain including the word "the" twice at the key "in"', () => {
        const test = mm.makeChains();
        expect(Object.keys(test)).toEqual(expect.arrayContaining(['in']));
        expect(test.in).toEqual(expect.arrayContaining(['the']));
        expect(test.in.length).toEqual(2);
        expect(chain.in.filter(word => word === "the").length).toEqual(2);
    });

    // test('inputting sample text should output a chain including two items, the last one null at the key "hat"');

    // test('inputting sample text should output expected chain', () => {
    //     const test = mm.makeChains();
    //     expect(test).toEqual(chain);
    // });
});

// describe('makeText function', () => {
//     let numWordsDefault = 100;

//     test('output should be at least as long as ')
//     test('output should not exceed default number of words', () => {
//         const test = mm.makeText();
//         const arrayOfOutput = test.split(" ");
//         expect(arrayOfOutput.length).toBeLessThanOrEqual(numWordsDefault);
//     });

//     test('output should not exceed specified word count', () => {
//         const test20 = mm.makeText(20);
//         const test42 = mm.makeText(42);
//         const array20 = test20.split(" ");
//         const array42 = test42.split(" ");
//         expect(array20.length).toBeLessThanOrEqual(20);
//         expect(array42.length).toBeLessThanOrEqual(42);
//     });

//     // test('output words should only have words from the input text')
// });

