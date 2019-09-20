//alert("pop-up-ruta")

var myName = "Dennis"; // Datatyp: string
var myAge = 32; //Datatyp: Number
var isEvil = false; //Datatyp: Boolean

// Singel line comment
/*
 **********
 Block 
 **********
*/
/*
  ------------     
    if/else 
  ------------
*/
if(myAge < 18) {
    // alert("you can not take a drivers license.")
}  else {
    // alert("Congratz! You are old enough to drive.")
}     

if(myName == "Dennis") {
    // alert("welcome, " + myName);
} else {
    // alert("you are not welcome")
}
// == equals to, === equals to and same datatype
if (myAge === "32") { 
    // alert("Välkommen,");
} else{
    // alert("you are not welcome")
}
var hasWatched = false; // add to watchlist
if(isEvil == true) {
    // alert("you are evil,");
} else {
//    alert("you are good,");
} 

/* 
  ***************** 
    Guessing app
  *****************
*/

var secretNumber = 7;
var userInput = Number(prompt("Guess a number between 0-10"));

if(userInput === secretNumber) {
    document.writeln("Grattis! Du har gissat rätt! <br>");
} else if (userInput < secretNumber){
    document.writeln("Du har gissat för lågt <br>");

} else if (userInput > secretNumber) {
    document.writeln("Du gissar för högt! <br>")
} else (userInput == 6||8) {
    document.writeln("Det bränns! <br>")
}


// if userInput === 6 or 8 "Det bränns"
// if userInput is less than secretNumber "du gissar för lågt"
// if userInput is higher than secretNumber "du gissar för högt"
