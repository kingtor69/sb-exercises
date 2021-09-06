/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  // words array for that is [ 'the', 'cat', 'in', 'the', 'hat' ]

  makeChains() {
    // TODO
    const chain = {};
    let words = this.words;
    for (let i = 0; i < words.length; i++) {
      let nextWord = words[i+1] || null;
      if (words[i] in chain) {
          chain[words[i]].push(nextWord);
      } else {
        chain[words[i]] = [nextWord];
      };
    };
    return chain;
  };


  /** return random text from chains */

  makeText(numWords = 100) {
    const chain = this.makeChains();
    let word = this.words[this.randomInt(this.words.length)];
    let outputString = `${word} `;
    for (let i = 1; i < numWords; i++) {
      word = chain[word][this.randomInt(chain[word].length)];
      if (word) {
        outputString += `${word} `;
      } else {
        return this.prettifyOutput(outputString);
      }
    }

    return this.prettifyOutput(outputString);
  }

  randomInt(max) {
    return parseInt(Math.random()*max)
  }

  prettifyOutput(str) {
    // capitalize first letter
    let prettyStr = str[0].toUpperCase();
    // add the rest of the string WITHOUT the trailing space
    prettyStr += str.slice(1, str.length-1);
    // add a period at the end of the "sentence"
    prettyStr += '.';
    return prettyStr;
  }
}

let text = "the cat in the hat is in the hat";
let mm = new MarkovMachine(text);

// console.log(mm.makeChains());
// console.log(mm.makeText());

module.exports = { MarkovMachine }