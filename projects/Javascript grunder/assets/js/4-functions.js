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

function quadrupleMe(x); {
    return 4 * x;
}
var myFavNumber = quadrupleMe(2);
console.log(myFavNumber);

function isEven(x) {
    return x && 2 ;
}


console.log(isEven(10));
console.log(isEven(15));