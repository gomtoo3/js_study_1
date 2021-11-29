// 문제 1

// var i = +prompt(`양의 정수입력 : `);
// var j = 1;
// var star = '';

// while (i >= j) {
//     if (j % 2 === 1) {
//         star += '+';    
//     } else star += '-';
//     j++;
// }

// alert(star);


// 문제2  입력숫자반복 인쇄

// console.log('===================');
// var n = 1;
// var m = +prompt('양의 정수입력 :');
// var prt = ''

// while (n <= m){
//     prt += (n % 10);
//     n ++;
// };

// alert(prt);

// 문제3. 제곱근의 값 구하기
// var n = +prompt('n의 값 :');

// var result = ''
// var i = 1;
// while (i <= n) {
//     result += '*';
//     if (i % 5 === 0) {
//         result += '\n';
//     }
//     i++;
// }

// alert(result);

// 문제4. 제곱근의 값 구하기
var n = +prompt('정사각형을 그립니다. \n 높이는 얼마입니까?');

var result = ''
var i = 1;
var j - 1;

while (i = n) {
    while (j <= n) {
        result += '*';
        j++;
    }
    result += '\n';
    i++;

}

alert(result);
