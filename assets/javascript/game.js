
var winCntr = 0 ;
var loseCntr = 0 ;
var totCntr = 5 ;
var guessedLetters = [];
var computerGuess ;
//var letters = "abcdefghioujklmnopqrstuvwxyz";
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
            lose();
           
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
    totCntr= 5;
    guessedLetters=[];
      
}

function win()
{
    winCntr++;
    resetGame();
    displayResult();
}

function lose()
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