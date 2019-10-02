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