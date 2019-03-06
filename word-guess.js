var Letter = require(`./Letter`);
var word = require(`./Word`);
var inquirer = require(`inquirer`);

var aech = new Letter(`h`);
console.log(aech.getValue());
console.log(aech.guessValue(`b`));
console.log(aech.guessValue(`h`));
console.log(aech.getValue());