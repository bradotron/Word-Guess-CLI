var Letter = require(`./Letter`);

function Word(word) {
  // store the original word
  this.original = word.trim();

  this.letters = [];
  for (let i = 0; i < this.original.length; i++) {
    this.letters.push(new Letter(this.original[i]));
  }

  this.toString = function() {
    let output = "";
    for (let i = 0; i < this.letters.length; i++) {
      output += `${this.letters[i].getValue()} `;
    }
    return output.trim();
  };

  this.guess = function(letter) {
    // iterate through letters and guess everything
    let guess = false; 
    for(let i=0; i<this.letters.length; i++) {
      if( this.letters[i].guessValue(letter) ) {
        guess = true;
      }
    }
    return guess;
  };

  this.isComplete = function() {
    // return true if all letters are guessed
    let complete = true;
    for(let i=0; i<this.letters.length; i++) {
      if(!this.letters[i].guessed) {
        complete = false;
      }
    }
    return complete;
  }
}

module.exports = Word;
