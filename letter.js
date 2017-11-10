
// Letter constructor
function Letter( letter, guessArr, word ){
	this.letter = letter;
	this.guessArr = guessArr;
	this.word = word;
}	

// method that takes user input and tests against special characters,
// spaces, double entries, letters already guessed, and determines correct
// and incorrect guesses.  Colors and styles are added in for visual interest
Letter.prototype.validate = function () {
	let guess = this.letter;
	if ( guess === '' ) {
		console.log('It looks like you didn\'t enter a guess. Try again...')
	} else if ( !/^[a-zA-Z]+$/.test( guess ) ) {
		console.log('You may not enter any numbers or special characters.  Try again...')
	} else if ( guess.length > 1 ) {
		console.log('You may only enter one letter at a time.  Try again...')
	} else if ( this.guessArr.indexOf( guess ) >= 0 ) {
		console.log('That letter has already been guessed.  Try again...');
	} else if ( this.word.letterArr.indexOf( guess ) >= 0 ) {
		console.log('That was a '+'  **CORRECT**  '.bold.white.bgGreen+' guess.  Guess another letter...');
		this.guessArr.push( guess );
	} else if ( this.word.letterArr.indexOf( guess ) < 0 && this.guessArr.indexOf(guess) < 0 ){
		this.guessArr.push( guess );
		this.word.guesses--;
		if ( this.word.guesses === 1 ) {
			console.log('That was an ' + ' INCORRECT '.bold.bgRed + ' guess. You only have '+this.word.guesses+' guess left.  Guess another letter, and make it a good one...');
		} else if ( this.word.guesses === 0 ){
			console.log('      '.bgBlack+'  Game over.  '.bold.red.bgWhite);
			console.log(' '.bgBlack+' Better luck next time! '.inverse);	
			this.word.show();
		} else {
			console.log('That was an ' + ' INCORRECT '.bold.bgRed  + ' guess. You have '+this.word.guesses+' guesses left.  Guess another letter...');
		}
	}
}


module.exports= Letter;