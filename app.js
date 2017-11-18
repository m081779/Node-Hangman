
// importing dependencies
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const os = require('os');

// importing external constructor files
const Word = require('./word.js');
const Letter = require('./letter.js');

// global variables
let wordArr = []
let lettersGuessed = [];
let word = ''

// function checks guesses left and draws ascii hangman
function drawMan() {
	let one = '     ========',
	two =     '        |   |',
	three =   '            |',
	four =    '            |',
	five =    '            |',
	six =     '     ========';
//                  ========
//                     |   | 
//                    ()   |
//                    /|\  |
//                    / \  |
//                  ++++++++ 
	switch( word.guesses ) {
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
	console.log( one );
	console.log( two );
	console.log( three );
	console.log( four );
	console.log( five );
	console.log( six );
}

// function reads file wordlist.txt and breaks all the words into an array
// then randomly picks a word and uses it to generate a new Word, 
// writes it to the screen and starts the guessLetter recursive loop.
function generateWord() {
	fs.readFile('wordList.txt', 'utf8', ( err, data ) => {
		if ( err ) throw err;
		wordArr = data.split( os.EOL );
		let random = ~~( Math.random() * wordArr.length );
		word = new Word( random, wordArr, lettersGuessed );
		word.blankify();
		drawMan();
		guessLetter(); 
	})
}

// function that is called recursively to allow user to guess letters 
// until the game is over.  When game is over, it checks to see if
// user wants to play again or not.
function guessLetter() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'guess',
			message: 'Guess a letter...'
		}
	]).then( res => {
		// user guess and new Word are passed into Letter constructor along 
		// with array of letters already guessed.  input is validated, man is drawn, 
		// and blanks are redrawn to take into account a correct guess
		let guess = res.guess.toLowerCase();
		var letter = new Letter( guess, lettersGuessed, word )
		letter.validate();
		drawMan();
		word.blankify();

		// conditional runs guessLetter recursively as long as win
		// or loss conditions haven't been met.  If game is over,
		// inquirer prompt is run to allow user to play again or not
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
			]).then( res => {
				if (res.playAgain) {
					lettersGuessed = [];
					generateWord(); 
				} else {
					console.log('Thanks for playing, have a nice day!');
				}
			});
		}
	});
}

// program is started by generating a word
generateWord();
