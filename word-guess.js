var Word = require(`./Word`);
var inquirer = require(`inquirer`);

var alphabet = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `g`,
  `h`,
  `i`,
  `j`,
  `k`,
  `l`,
  `m`,
  `n`,
  `o`,
  `p`,
  `q`,
  `r`,
  `s`,
  `t`,
  `u`,
  `v`,
  `w`,
  `x`,
  `y`,
  `z`
];

var wordBank = [
  `laser`,
  `ridiculous`,
  `apple`,
  'elephant',
  `telephone`,
]

var randomWord = {};
var done = false;
var lives = 10;
var totalScore = 0;

initializeGame = function() {
  // generate a random word
  randomWord = new Word(getRandomWord());
  done = false;
  lives = 10;
};

let getRandomWord = function() {
  return wordBank[Math.floor(Math.random()*wordBank.length)];
}

let playRound = function() {
  printWordStatus();
  if (!done) {
    inquirer
      .prompt({
        name: "letter",
        type: "input",
        message: "Type a letter to guess...",
        validate: function(value) {
          if (alphabet.indexOf(value.toLowerCase()) >= 0) {
            return true;
          } else {
            return "Please enter a single letter...";
          }
        }
      })
      .then(function(answer) {
        console.log(`---------------------------------------`);
        let goodGuess = randomWord.guess(answer.letter.toLowerCase());
        if (goodGuess) {
          console.log(`Good Guess!!!`);
        } else {
          lives--;
          console.log(`Wrong!!! ${lives} remaining...`);
        }
        if (lives <= 0 || randomWord.isComplete()) {
          done = true;
        }
        playRound();
      });
  } else {
    roundComplete();
  }
};

let roundComplete = function() {
  // tell the user they won/lost
  if (lives > 0 && randomWord.isComplete()) {
    // winner
    totalScore++;
    console.log(`You Won!!! Total Score: ${totalScore}`);
  } else {
    // loser
    totalScore--;
    console.log(`You Lost!!! Total Score: ${totalScore}`);
  }

  // prompt if they want to play again or quit
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: ["Start Another Round", "Quit"]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "Start Another Round":
          initializeGame();
          playRound();
          break;

        case "Quit":
        console.log(`Thank you for playing! Good Bye :)`)
        break;
      }
    });
};

let printWordStatus = function() {
  // show the user the blanks
  console.log(`---------------------------------------`);
  console.log(`Word Status: "${randomWord.toString()}"`);
  console.log(`---------------------------------------`);
};

initializeGame();
playRound();
