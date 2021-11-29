// 1번문제

var a = +prompt('1번째 숫자입력 :');
var b = +prompt('2번째 숫자입력 :');
var s = 0
var ba = a
while (b >= a)  {
    s += a;
    a ++ ;
}

alert(`${ba} ~ ${b}까지의 총합 : ${s}`);

