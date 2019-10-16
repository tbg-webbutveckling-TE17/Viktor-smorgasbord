// for använder man när man vet hur många gånger loopen ska köras

// initiering; villkor; inkrementering
for (var i = 0; i < 6; i++) {
    console.log(i)
}

var str = "Hello World!" ; 
for (var i = 0; i < str.length; i++) {
    console.log (str[i]);
}

var myArr = [ "HTML", "CSS", "JS", 42, true ];
var len = myArr.length;
for (var i = 0; i < len;  i++) {
    console.log(myArr[i]);
}

for (var i = -10; i < 20; i += 1) {
    console.log(i);
}
for (var i = 10; i < 42; i += 2) {
    console.log(i);
}
for (var i = 300; i <= 333; i += 2) {
    if (i % 2 !== 0) {
        console.log(i);
    }


}

for (var i = 5; i < 50; i++) {
    if (i % 3 === 0 && i % 5 === 0 ){
     console.log(i);
    }
    
}

var rows = 5;
var cols = 5;

for(var i = 0; i < rows; i++) {
    for(var ii = 0; ii < cols; ii++) {
        document.writeln("*")
    }
    document.writeln("<br/>")
}

var multiplier = 9
for(var i = 0; i < 10; i++ ) {
   var result = multiplier * i
   document.writeln(multiplier + "*" + i + "=" + result + "<br/>")    
}

for (var multiplier = 0; multiplier <= 10; multiplier++) {
    for(var i = 0; i <= 10; i++) {
        var result = multiplier * i
        document.writeln(multiplier + "*" + i + "=" + result + "<br/>")
    }
    document.writeln("<br/>")
}


var choices = [ "sushi", "tacos", "kött", "kyckling"];   
for(var i = 0; i < choices.length; i++) {
    document.writeln("My #" + (i + 1) + " choice is " + choices[i] + "<br/>")
}

for(var i = 0; i < choices.length; i++ ) {
    var choicenum = i + 1;
    var choicesuffix;

    if(choicenum == 1){
        choicesuffix = "st";
    } else if(choicenum == 2){
        choicesuffix = "nd";
    } else if(choicenum == 3){
        choicesuffix = "rd";
    } else(
        choicesuffix = "th"
    );
    document.writeln("My " + choicenum + choicesuffix + " choice is " + choices[i] + "<br/>");
} ("<br/>")

for(var i = 10; i >= 0; i--) {
   for(var ii = 0; ii <= i; ii++) {
       document.write("* ")
   }
   document.write("<br/>")
}

for(var i = 0; i <= 10; i++) {
    for(var ii = 0; ii <= i; ii++) {
        document.write("* ")
    }
    document.write("<br/>")
}
rows = 9;
for (var i = 1; i <= rows; i++) {
    for (var j = 0; j <= rows -i; j++) {
       document.write("&nbsp"); 
    }
    for(var k = 1; k <= i; k++) {
        document.write("* ");
 
    }
    document.write("<br>");
  }
