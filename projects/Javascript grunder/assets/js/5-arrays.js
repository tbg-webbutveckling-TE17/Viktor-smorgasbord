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