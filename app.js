const inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require('./letter.js');
let wordArr = ['hello', 'dog', 'cheese']
let word = ''
let lettersGuessed = [];

function generateWord() {
	let random = ~~( Math.random() * wordArr.length );
	word = new Word( random, wordArr, lettersGuessed );
	console.log( word.word );
	word.blankify();
}

function guessLetter() {
	inquirer.prompt([
		{
			type: 'text',
			name: 'guess',
			message: 'Guess a letter...'
		}
	]).then(function (response) {
		let guess = response.guess.toLowerCase();
		var letter = new Letter(guess, lettersGuessed, word)
		letter.validate();
		
		
		word.blankify();
		if ( word.guesses > 0 && !word.complete ) {
			guessLetter();
		} else {
			inquirer.prompt([
				{
					type: 'confirm',
					name: 'playAgain',
					message: 'Would you like to play again?',
					default: true
				}
			]).then(function (res) {
				if (res.playAgain) {
					lettersGuessed = [];
					generateWord(); 
					guessLetter();
					word.guesses = 6;
				} else {
					console.log('Thanks for playing, have a nice day!');
				}
			});
		}
	});
}
generateWord();
guessLetter();