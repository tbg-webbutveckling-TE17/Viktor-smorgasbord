var friend1 = "Måns";
var friend2 = "Sten";
var friend3 = "Clearence";
var friend4 = "Mona";

var friends = ["Måns", "Sten", "Clearence", "Mona" ];
var printToScreen = document.getElementById("textArray");
printToScreen.innerHTML = friends[0];

function newName() {
    friends[1] = "Patrik"
}

var colors = [];
var colors = new Array();
var randomArray = ["Hej", 21, false, true, {} ];
printToScreen.innerHTML = randomArray.length;

colors = ["red", "green", "blue"];
printToScreen.innerHTML = colors.join(" <br /> ");

colors.pop();
printToScreen.innerHTML = colors.join(" <br /> ");

colors.push("purple");
printToScreen.innerHTML = colors.join(" <br /> ");

colors.unshift("yellow");
printToScreen.innerHTML = colors.join(" <br /> ");

colors.shift();
printToScreen.innerHTML = colors.join(" <br /> ");

//var colorGreen = colors.slice(1, 3);
//printToScreen.innerHTML = colorsGreen.join(" <br />");

var colorsCopy = colors.slice(colors);
printToScreen.innerHTML = colorsCopy.join(" <br />");

printToScreen.innerHTML = colors.indexOf("green");

var cars = ["audi rs6", "audi A4", "bmw e91", "Aventador", "Tesla", "Mustang"]
for(var i = 0; i < cars.length; i++) {
    printToScreen.innerHTML += cars[i] + "<br />";
}


printToScreen.innerHTML = cars.reverse() + "<br />";

var countries = ["sweden", "england", "austalia", "usa", "canada"];
countries.forEach(function(country) {
    printToScreen.innerHTML = country + " ";
});

printToScreen.innerHTML = "";
var planets = ["earth", "mars", "saturnus", "jupiter"];
planets.forEach(function(planet) {
    printToScreen.innerHTML +=planet + " - ";

});

printToScreen.innerHTML = "";
var number = [1, 32, 44, 112, 3, 5, 6, 9, 12 ];
var color = ["red", "green", "blue", "yellow" ];

//number.forEach(function(color) {
  //  if (color % 3 === 0 ) {
    //    printToScreen.innerHTML += color + "";
    //}
//);

for (var i = 0; i < number.length; i++){
    if(number[i] % 3 === 0) {
        printToScreen.innerHTML += number[i] + " "
    }
}
printToScreen.innerHTML = "";
var printReverse =[1, 2 , 3, 4, 5, 6, 7];
for (var i = printReverse.length -1 ; i >= 0 ; i--){
        printToScreen.innerHTML += printReverse[i] + " "
}
function isIdentical(array) {
    var first = array[0]
    for (i = 1; i < array.length; i++) {
        if (array[i] !== first) {
            return false
          }

    }
      
    return true
}

isIdentical([1, 1, 1, 1, 1, 1, 1, 1]);

function sumArray(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    printToScreen.innerHTML = sum;
}

sumArray([1, 2, 3, 4, 5 ]);

function max(array) {
    var maximum = array[0]
    array.forEach(function(index) {
        if(index > maximum) {
            maximum = index
        }
        
    })
       return maximum
        
    
}
max([2, 1, 23, 54, 4, 12]);


