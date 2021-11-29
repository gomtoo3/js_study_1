

// 나눗셈 연산
console.log(27 / 5);
console.log(27 % 5);

console.log(5 % 4);

// 나눗셈 뒤에숫자가 앞보다 크면 앞에 숫자가 나머지
console.log(4 % 10);

console.log(0 % 4);

// 불가능한 연산 : 0으로 나눌수 없다.(0은 젯수가능, 피젯수불가능)
console.log(4 % 0);

var num = 2;
console.log(num ** 3);

console.log('==========================');

// 증감 연산자 ++, --
// 1증가하거나 1감소하는 
var x = 3;
x++;

console.log(`x: ${x}`);

// 전위연산(prefix), 후위연산(postfix)
var a = 10;
var b = a++;
console.log(`a: ${a}, b: ${b}`);

var c = 10;
var d = ++c;
console.log(`a: ${c}, b: ${d}`);

var a = 1, b = 1;
var c = ++a;
var d = b++;
console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);

