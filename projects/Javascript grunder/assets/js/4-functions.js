function twinkleTwinkle() {
    console.log("Blinka lilla stjärna där!");
    console.log("hur jag undrar var du är...")

}

twinkleTwinkle(); //Call a function

function doSomething() {
    // Do something here...
}
//Declare a function with to parameters
function multiply(num, num2) {
    console.log(num * num2);
}

//Call the function with two arguments
multiply(5, 6);

function sayHello(theName) {
    console.log("Hello!," + theName);
}

sayHello("Jens");
sayHello("Bengt");

function getArea(width, height) {
    console.log("The area of: " + width + " and " + height + " is " + width * height);
}

getArea(5, 10);
getArea(7, 4.5);

function toSquare(x) {
    return x * x;
}
// return a value
console.log("4 squared is " + toSquare(4));
console.log("4 squared is " + toSquare(8));

var result = toSquare(5);
console.log(result);

function quadrupleMe(x) {
    return 4 * x;
}
var myFavNumber = quadrupleMe(2);
console.log(myFavNumber);

function isEven(x) {
    if (x % 2 === 0 ) {
       return true;

    } else{
        return false;
    }
    
} 

console.log(isEven(10))

function kebebToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}

console.log(kebebToSnake("This-is-a-kebab-cased-string"));

function localScope() {
    var showScope = 31;
    console.log(showScope);
}

localScope();
console.log(showScope);

var showScope = "i'm a  global variable";
console.log(showScope)

var showGlobalVar = 99; //Global variable
function globalScope() {
    showGlobalVar = 100;
    console.log(showGlobalVar);
}

console.log(showGlobalVar);
globalScope();
console.log(showGlobalVar);

function hi() {
    var name = "Gustaph";
    console.log(name);
}
hi();

function bye() {
    console.log(name);
}

bye();
// Named function
function sing() {
    console.log("im singing in the rain");
    console.log("just singing in the rain");
    console.log("What a glorious feeling!");
}
//Higher order function
setInterval(sing, 2000); // #1
clearInterval(1);
setInterval(sing, 2000); // #2
clearInterval(2);

var intervalExample = setInterval(sing, 2000);
clearInterval(intervalExample);

// Anonomous function
var anon = setInterval(function() {
    console.log("I'm an anonomous function");
}, 1500);
clearInterval(anon);

function myTimer() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    document.getElementById("timeOutput").innerHTML = time;
}
myTimer();

var myTime = setInterval(myTimer, 1000);

var stopBtn = document.getElementsByTagName("button")[0];
stopBtn.addEventListener("mouseenter", function() {
    clearInterval(myTime);
    alert("Time is stopped!");

});

stopBtn.addEventListener("mouselave", function() {
    myTime = setInterval(myTimer, 1000);
});

function calculateTip(total) {
    var tipPercent = 0.15;
    return total * tipPercent;
}

//var billTotal = prompt("Quanto Costa?");  
//var billTip = calculateTip(billTotal);
//var receipt = "Bill Total " + billTotal + ":- Tip " + billTip + ":-";
//var displayBill = document.getElementsByClassName("displayBill")[0];
//displayBill.innerHTML = receipt;

var displayFortune = document.getElementsByClassName("displayFortune")[0];
function tellFortune(jobTitle, geoLoc, partner, kids) {
    var tellFuture = "You will be a <strong>" + jobTitle + " </strong> in <strong>" + geoLoc + "</strong> with <strong>" + partner + "</strong> and <strong>" + kids + "</strong> kids";
displayFortune.innerHTML = tellFuture;
}

//tellFortune("Engineer", "Nebraska", "Ashley", 2);

 var myJobTitle = ["Engineer", "Pilot", "Cashier", "Waiter", "Police"]
 var myGeoLoc = ["Nabraska", "London", "Madrid", "Stockholm", "Dubai"]
 var myPartner = ["Ashley", "Hanna", "Ann", "Jennifer", "Emma"]
 var myKids = [2, 5, 1, 3, 0];

 var tellBtn = document.getElementsByTagName("button")[1];
 tellBtn.addEventListener("click", function() {
     var randomJob = myJobTitle[Math.floor(Math.random() * myJobTitle.length)];
     var randomGeo = myGeoLoc[Math.floor(Math.random() * myGeoLoc.length)];
     var randomPartner = myPartner[Math.floor(Math.random() * myPartner.length)];
     var randomKids = myKids[Math.floor(Math.random() * myKids.length)];

     tellFortune(randomJob, randomGeo, randomPartner, randomKids);
 })
 
 var calculateDogAge = prompt("How old is your dog in human years?")
function calculateDogYears(calculateDogAge) {
   var displayDogYears = document.getElementsByTagName("p") [3];
   var dogYears = calculateDogAge * 7;
   var tellDogYears = "Your dog is " + dogYears + " in dog years"
   
   displayDogYears.innerHTML = tellDogYears; 

   
}

calculateDogYears(calculateDogAge)

 var yourAge = promt("How old are you?")
 var snackAmount = promt("How much of your snacks do u want to eat per day?")
 function calculateSupply(yourAge, snackAmount)  {
    var displaySnacksPerDay = document.getElementsByClassName("snacks") [0];
    var supplyDate(110 - yourAge) * 365;
    var supplyAmount = supplyDate * snackAmount;
    var showSupply = "You will need " + supplyAmount + " to last you until the ripe old age of 100"

    displaySnacksPerDay.innerHTML = showSupply;
}

calculateSupply(yourAge,snackAmount)


