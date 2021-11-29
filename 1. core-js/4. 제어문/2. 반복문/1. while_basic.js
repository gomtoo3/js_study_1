

// 카운트 다운 5부터 0까지 (반복문의 3요소: 제어변수, 조건식, 증감값)

var n = 5; //시작값 (제어변수: 시작값을 저장하는 변수)

while(n >= 0) {   //끝값 (조건식: 반복문의 끝을 결정)
    console.log(`${n}!!`);
    n--;          //증감값 (step: 반복문의 조건식이 언젠가 false가 될수 있도록 조정)
}

console.log('반복문 끝!');
console.log(n);

console.log(`=====================`);
var level = 5;

// n은 1부터 9까지 1씩 증가하면서 반복
var n = 1;

while(n <= 9) {
    console.log(`${level} x ${n} = ${level * n}`);
    n++
}

// 10 ~ 34 가지의 정수 중 홀수만 출력
console.log(`=====================`);
var m = 10

while (m <= 50) {
    if (m % 2 ===1) {
        console.log(m);
    }
    m++;
}

console.log(`########################`);

// 1 ~ 100 누적 총합을 구하는 코드
var n = 1;
var total = 0;

while (n <= 10) {
    total += n;
    n++;
}
console.log(`누적총합 : ${total}`);
    

