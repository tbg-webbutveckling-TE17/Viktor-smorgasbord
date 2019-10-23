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
