


let smallNumber = 0;
let largeNumber = 0;
let winningNumber = 100;

// The prompt() is a method of the window object. The prompt() method instructs the web browser
// to display a dialog with a text, text input field, and two buttons OK and Cancel.
//It returns a string containing the text entered by the user, or null. 

//Its default input is string. So We can change our input data type as our demands.
let guessNumber = +prompt("Guess a Number :"); //here "+" sign is for converting string into number.

if(winningNumber>guessNumber){
    smallNumber = winningNumber - guessNumber;
}else if(winningNumber<guessNumber){
    largeNumber = guessNumber - winningNumber;
}

if(winningNumber === guessNumber){
    console.log(" Your Guess Is Correct !!");
}else{
    if(winningNumber > guessNumber){
    console.log(`Your'e ${smallNumber} smaller than the guess Number !`);
    }else{
        console.log(`Your'e ${largeNumber} larger than the guess Number !`);   
    }
}
