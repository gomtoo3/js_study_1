
var n = +prompt('정숫값 :');
var result = '';
var cnt = 0;

for (i = 1; i <= n; i++) {
    if (n % i === 0){
        result += `${i}\n`;
        cnt++;
    }
}

alert(result + `약수는 ${cnt}개입니다.`);