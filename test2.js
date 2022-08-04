//generate a pyramide of $
var n = 10;
var str = "";
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i; j++) {
        str += "";
    }
    for (var k = 0; k <= i; k++) {
        str += "$";
    }
    str += "\n";
}
console.log(str);
