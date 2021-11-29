
var height = +prompt('당신의 키는??');

if (height >= 140){
    var age = +prompt('당신의 나이는??');
    if (age >= 8) {
        alert('탑승가능합니다.');
    } else {
        alert('나이가 8세이상만 탑승가능합니다.');
    }
} else {
    alert('키가 140이상만 탑승가능합니다.');
}