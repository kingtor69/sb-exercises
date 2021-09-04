const markov = require('./markov');
const makeTest = require('./makeText.js');
    
describe('file inputs', () => {
    let file = "eggs.txt";
    let defaultWordCount = 100;

    test('dummy file test that will pass until I get around to this', () => {
        expect(file).toEqual(file);
    });

    // test('file input should include certain words', () => {
        
    // });
    // test('output from file input should not exceed default word count', () {
    //     const 
    // })
});

describe('url inputs', () => {
    let url = "http://www.gutenberg.org/files/11/11-0.txt";

    test('dummy url test that will pass until I get around to this', () => {
        expect(url).toEqual(url);
    });

    // test('url input should return the expected number of words', () => {

    // });
});