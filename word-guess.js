var Word = require(`./Word`);
var inquirer = require(`inquirer`);

// generate a random word
var randomWord = new Word("hurrdurr");

// prompt the user to guess a letter

inquirer
  .prompt({
    name: "letter",
    type: "input",
    message: "Type a letter to guess..."
  })
  .then(function(answer) {
    console.log(`guess: ${answer.letter}`);
    randomWord.guess(answer.letter);
    refresh();
  });

let refresh = function() {
  // show the user the blanks
  console.log(`---------------------------------------`);
  console.log(`Word Status: "${randomWord.toString()}"`);
  console.log(`---------------------------------------`);
};
