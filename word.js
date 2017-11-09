function Word( index, wordArray, guessArr ) {
	this.wordArray = wordArray;
	this.guessArr = guessArr;
	this.word = this.wordArray[index];
	this.complete = false;
	this.blankArr = [];
	this.guesses = 6;
}

Word.prototype.createArray = function () {
	this.letterArr = [];
	this.letterArr = this.word.split( '' );
}

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
	console.log('=========================')
	console.log( this.blankArr.join( ' ' ) );
	console.log('=========================')
	this.checkString();		
}

Word.prototype.checkString = function () {
	if (!this.blankArr.includes('_')) {
		this.complete = true;
		console.log('You guessed all the letters correctly!!!!  You win!');
	}
}

Word.prototype.show = function () {
	if ( this.guesses <= 0 ) {
		console.log(`${this.word} was the word you were trying to guess.`);
	}
}

module.exports = Word;