// this file defines the Letter class

function Letter(value) {
  this.guessed = false;
  this.value = value;

  this.guessValue = function(guess) {
    if(guess == this.value) {
      return this.guessed = true;
    } else {
      return false;
    }
  };
  
  this.getValue = function() {
    if(this.guessed) {
      return this.value;
    } else {
      return `_`;
    }
  };
};

module.exports = Letter;