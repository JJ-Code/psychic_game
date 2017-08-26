//Alphabet to be key  
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Creating variables
      var wins = 0;
      var losses = 0;
      var gusses = 10;
      var guessesLeft = 10;
      var wrongGuesses = [];
      var letterToGuess = null;

//Randomly chooses a choice letter from alphabet.
      var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];   

//Allows the user 10 guesses
      var updateGuessesLeft = function() {
      // Grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
      document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
      };

      var updateLetterToGuess = function() {
      this.letterToGuess = this.computerChoice[Math.floor(Math.random() * this.computerChoice.length)];
      };

      var updateGuessesSoFar = function() {
      // Guesses the user has tried then display it as letters separated by commas. 
      document.querySelector('#lettersGussed').innerHTML = "You have gussesed: " + wrongGuesses.join(', ');
      };


// Function will be called when we reset everything
      var reset = function() {
        totalGuesses = 10;
        guessesLeft = 10;
        wrongGuesses = [];

// Evoke Functions
      updateGuessesLeft();
      updateLetterToGuess();
      updateGuessesSoFar();
      }

      //updateLetterToGuess();
      //updateGuessesLeft();


// This function is run whenever the user presses a key.
    
    document.onkeyup = function(event) {
      guessesLeft--;
      // Determines which key was pressed.
        var userGuess = event.key.toLowerCase();
          
        wrongGuesses.push(userGuess);
        
        updateGuessesLeft();
        updateGuessesSoFar();


          //if correct letter guessed
          if (guessesLeft > 0) {
            if (userGuess === letterToGuess){
              wins++
              document.querySelector('#wins').innerHTML = "Wins: " + wins;
              alert("Congratulations, you are psychic!");
              reset();
            }
          //if not correctly guessed  
          } else if(guessesLeft === 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you are not a winning psychic!");
            reset();
          }


    };