const inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require('./letter.js');
const fs = require('fs');
let wordArr = ['the cheese is old and moldy']
let word = ''
let lettersGuessed = [];

function generateWord() {
	fs.readFile('wordList.txt', 'utf8', function (err, data) {
		if (err) throw err;
		wordArr = data.split('\r\n');
		let random = ~~( Math.random() * wordArr.length );
		word = new Word( random, wordArr, lettersGuessed );
		word.blankify();
		guessLetter();
	})
}

function guessLetter() {
	inquirer.prompt([
		{
			type: 'text',
			name: 'guess',
			message: 'Guess a letter...'
		}
	]).then(function (res) {
		let guess = res.guess.toLowerCase();
		var letter = new Letter(guess, lettersGuessed,word)
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
