
// Word constructor function
function Word( index, wordArray, guessArr ) {
	this.wordArray = wordArray;
	this.guessArr = guessArr;
	this.word = this.wordArray[index];
	this.complete = false;
	this.blankArr = [];
	this.guesses = 6;
}

// method that breaks word into array of letters
Word.prototype.createArray = function () {
	this.letterArr = [];
	this.letterArr = this.word.split( '' );
}

// method that takes word array and generates underscores for
// letters, shows correct guesses and writes them to the screen
Word.prototype.blankify = function () {
	this.createArray();
	this.blankArr = [];
	for ( let i = 0; i < this.letterArr.length; i++ ) {
		let letter = this.letterArr[i]
		if ( this.guessArr.indexOf(letter) >= 0 ) {
			this.blankArr.push(letter)
		} else if (letter !== ' ') {
			this.blankArr.push( '_' )
		} else if (letter === ' ') {
			this.blankArr.push( '  ' )
		} 
	}
	console.log('========================='.cyan);
	console.log( '   '+this.blankArr.join( ' ' ) );
	console.log('========================='.cyan);
	this.checkString();		
}

// method that checks win condition by testing the array of blanks
// to see if any underscores (unguessed letters) remain.  If none remain,
// win statement is written to the screen.
Word.prototype.checkString = function () {
	if (!this.blankArr.includes('_')) {
		this.complete = true;
		console.log('  You guessed all the letters correctly!!!!');
		console.log('             '.bgBlack +' ***You WIN!*** '.america.bold.bgWhite);
	}
}

// If user runs out of guesses, this method shows the word
// that they were trying to guess.
Word.prototype.show = function () {
	if ( this.guesses <= 0 ) {
		console.log('   ');
		console.log(`  The word you were trying to guess was ${this.word.bold.white.bgRed}.`);
		console.log('   ');
	}
}

module.exports = Word;