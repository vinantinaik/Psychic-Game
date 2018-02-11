
//global variables
var winCntr = 0 ;
var loseCntr = 0 ;
var totCntr = 9 ;
var guessedLetters = [];
var computerGuess ;
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


document.onkeyup = function(event){
    var yourGuess = event.key.toLowerCase();
    computerGuess = getComputerGuess();
    if (totCntr > 0)
    {
        if (yourGuess === computerGuess)
        {
            win();
        }
        else{
            guessedLetters.push(yourGuess);
            lost();
           
        }
      
    }
    else
    {
        resetGame();
    }
    

   
}

function getComputerGuess()
{
        var rnd ;
        var str;

        rnd = Math.floor(Math.random()* letters.length);
        str = letters[rnd];
    return str;
}

function resetGame()
{
    totCntr= 9;
    guessedLetters=[];
      
}

function win()
{
    winCntr++;
    resetGame();
    displayResult();
}

function lost()
{
    if(totCntr === 1)
    {
        loseCntr++;
       
        resetGame();
    }
    else{
        totCntr--;
    }
    displayResult();
}

//display final result
function displayResult()
{
    var winP = document.getElementById("wins");
    var loseP = document.getElementById("losses");
    var guessesLeftP = document.getElementById("guessesLeft");
    var guessedLettersP = document.getElementById("guessedSoFar");

    guessesLeftP.innerHTML = totCntr;
    guessedLettersP.innerHTML = guessedLetters.toString();
    winP.innerHTML = winCntr;
    loseP.innerHTML = loseCntr;
   
}

//when restart button is clicked
function restartGame()
{
    totCntr = 9;
    winCntr = 0;
    loseCntr = 0;
    guessedLetters=[];
    displayResult();
}