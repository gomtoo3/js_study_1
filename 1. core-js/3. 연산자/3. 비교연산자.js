
var a = 5;
var b = `5`;

// ==, != 연산자는 암묵적으로 문자열 내부에 
// 순수한 숫자가 있으면 자동으로 따옴표를 제거후
// 비교합니다.
console.log(a === b);
console.log(a !== b);

console.log(`=======================`);

// == 비교는 결과 예측이 어려우므로 사용하지 않는 걸 추천
console.log('0' === '');
console.log( 0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');

// 숫자 대소 비교
var x = 10;
console.log(x > 5);
console.log(x <= 10);

// 문자 대소 비교
console.log(`%%%%%%%%%%%%%%%%`);
console.log('a' === 'A');

