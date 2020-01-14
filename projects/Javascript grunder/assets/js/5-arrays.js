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

var colorGreen = colors.slice(1, 2);
printToScreen.innerHTML = colorsGreen.join(" <br />");

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