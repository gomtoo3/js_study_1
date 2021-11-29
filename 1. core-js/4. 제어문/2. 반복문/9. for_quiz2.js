
var a = +prompt(`한변(1): `);
var b = +prompt(`한변(2): `);
var result = '';

// 가로 세로 보정
if (a < b) {
    var t = a;
    a = b;
    b = t;
}

for (var i=1; i <= b; i++){
    for (var j=1; j <= a; j++){
        result += '* ';
    }
        result += '\n';
}
alert(result);