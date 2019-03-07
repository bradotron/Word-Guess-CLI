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
    for(let i=0; i<this.letters.length; i++) {
      this.letters[i].guessValue(letter);
    }
  };
}

module.exports = Word;
