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
var len = choices.length
var choices = [ "sushi", "tacos", "kött", "kyckling"];   


    


