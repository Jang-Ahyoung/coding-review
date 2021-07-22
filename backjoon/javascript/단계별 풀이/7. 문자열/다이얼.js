// 알파벳 대문자로 이루어진 단어가 주어진다. 단어의 길이는 2보다 크거나 같고, 15보다 작거나 같다

// 오답
let input = require('fs').readFileSync('/dev/stdin').toString().split('');

let a = input.reduce((acc, cur) => {
    cur = Number(cur.charCodeAt());
    if ((80 <= cur && cur <= 83)) cur = 5;
    else if ((84 <= cur && cur <= 86)) cur = 6;
    else if (87 <= cur && cur <= 90) cur = 7;
    else cur = Math.floor((cur - 65) / 3);

    return acc += (cur + 3);
}, 0)

console.log(a)