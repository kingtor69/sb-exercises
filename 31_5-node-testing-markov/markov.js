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
        if (!chain[words[i]].includes(nextWord)) {
          chain[words[i]].push(nextWord);
        }
      } else {
        chain[words[i]] = [nextWord];
      };
    };
    return chain;
  };


  /** return random text from chains */

  makeText(numWords = 100) {
    let outputString = "";
    for (let i = 0; i < numWords; i++) {
      outputString += "fuck "
    }

    return outputString;
  }
}

let text = "the cat in the hat";
let mm = new MarkovMachine(text);

// console.log(mm.makeText());

module.exports = { MarkovMachine }