let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 옳은 풀이
const caseCount = Number(input[0]);
let countGroupWord = 0;

for (let i = 1; i <= caseCount; i++) {
    const word = input[i]; // 한 단어씩 대입
    const letter = [];
    let isGroupWord = true; // 기본값 참

    for (let j = 0; j < word.length; j++) { // 한 문자씩 돌면서
        if (letter.indexOf(word[j]) === -1) {// letter안에 담겨있지 않으면
            letter.push(word[j]); // letter 배열안에 넣고
        } else {// letter 안에 담겨있을 때
            if (letter.indexOf(word[j]) !== letter.length - 1) {
                isGroupWord = false; // 마지막 값이 아니라면 flase 처리
                break; // 반복문 중단
            }
        }
    }
    if (isGroupWord) { // 참이 맞을경우
        countGroupWord += 1; // count 값을 하나 더해준다.
    }
}
console.log(countGroupWord);



let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const len = input.shift(); // 첫 줄 빼오고

for (let i = 0; i < len; i++) {
    arr = [...new Set(input[i].split(''))];
    let str = input[i].split('');
    if (arr.length == str.length) {
        continue;
    }
    else {
        str.forEach(value => {
            startIndex = str.indexOf(value);
            endIndex = str.lastIndexOf(value);
            if (endIndex - startIndex != 0) {
                let strSplice = str.splice(startIndex, endIndex - 1).join('');
                let confirmStr = value.repeat(endIndex - startIndex + 1);
                if (strSplice != confirmStr) {
                    break;
                } console.log(strSplice, confirmStr)
            }
        })
    }
}
