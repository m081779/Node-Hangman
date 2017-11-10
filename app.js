const inquirer = require('inquirer');
const colors = require('colors');
const Word = require('./word.js');
const Letter = require('./letter.js');

const fs = require('fs');
let wordArr = []
let lettersGuessed = [];
let word = ''

function drawMan() {
	let one= '     ========',
	two=     '        |   |',
	three=   '            |',
	four=    '            |',
	five=    '            |',
	six=     '     ========';
// ========
//    |	  | 
//   ()   |
//   /|\  |
//   / \  |
// ++++++++ 
	switch(word.guesses) {
		case 6: 
		break;
		case 5: 
		three = '       ()   |';
		break;
		case 4:
		three = '       ()   |';
		four =  '        |   |'
		break;
		case 3:
		three = '       ()   |';
		four =  '       /|   |'
		break;
		case 2:
		three = '       ()   |';
		four =  '       /|\\  |'
		break;
		case 1:
		three = '       ()   |';
		four =  '       /|\\  |';
		five =  '       /    |';
		break;
		case 0:
		three = '       ()   |';
		four =  '       /|\\  |';
		five =  '       / \\  |';
		break;
	} 
	console.log(one);
	console.log(two);
	console.log(three);
	console.log(four);
	console.log(five);
	console.log(six);
}

function generateWord() {
	fs.readFile('wordList.txt', 'utf8', function (err, data) {
		if (err) throw err;
		wordArr = data.split('\r\n');
		let random = ~~( Math.random() * wordArr.length );
		word = new Word( random, wordArr, lettersGuessed );
		word.blankify();
		drawMan();
		guessLetter();
		
	})
}

function guessLetter() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'guess',
			message: 'Guess a letter...'
		}
	]).then(function (res) {

		let guess = res.guess.toLowerCase();
		var letter = new Letter(guess, lettersGuessed,word)
		letter.validate();
		drawMan();
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
					word.guesses = 6;
				} else {
					console.log('Thanks for playing, have a nice day!');
				}
			});
		}
	});
}
generateWord();
