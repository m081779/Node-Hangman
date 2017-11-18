# Node Hangman

[Click here](https://soapbox.wistia.com/videos/gR8fCSaib8) to see a video of the completed project.

## Technologies used:
* Node.js
* Ecmascript 6 syntax
* NPM packages:
	* Inquirer - package that allows interactive user prompts in CLI programs
	* Colors - package that adds colors and styles to CLI programs




## This is a version of the classic hangman game that is run on the command line.  The user inputs letter characters via an NPM package called inquirer.  All guesses are tracked to keep the user from guessing the same letter more than once.
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img1.png)





## The user input is validated to not allow any numbers, special characters, or spaces:
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img2.png)





## The validation also will only allow one letter to pass:
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img3.png)





## When a letter is guessed correctly, a message displays.  All of the coloring was done with the NPM package colors:
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img4.png)



## Incorrect guesses will cause more body parts to be drawn, and the number of guesses are displayed:
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img5.png)
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img6.png)
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img7.png)
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img8.png)





## When the user has only one guess left, the message changes to indicate that they should proceed with caution:
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img9.png)





## If the user loses, a loss message is displayed, the man is fully drawn, and they are prompted to play again:
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img10.png)





## When the win condition is triggered, a message is displayed in rainbow colors to indicate that they won:
![image of command line prompt](https://github.com/m081779/Node-Hangman/blob/master/images/img11.png)