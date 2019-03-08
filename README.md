# Word-Guess-CLI
This is a node.js command-line word guessing game, demonstrating some basic functionality of node.js and using a couple node modules.

# How to Play
You must have node.js installed for this application to work. Clone the repository, then access that directory from the command line. Navigate into that directory from the command-line then enter "node word-guess.js" to begin.

## Gameplay Loop
When the game loads, it will automatically generate the first word to guess, and prompt the user to enter a letter. 

* Type a single letter then press enter to submit your guess.
* The game will analyze your guess and display whether it was a good guess or bad.
* Continue making guesses until the word is complete, or you run out of lives.
* If you finish the word you will gain one point and be prompted to select another word or quit.
  * If you select to continue the game, the loop starts again.
  * If you quit, the game exits

That's pretty much all there is to it, enjoy!
