// 나의 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().trim(); // 앞뒤도 다 잘라주고
console.log(input.split(" ").filter(str => str != "").length); // 중간 연속 공백도 제거해줘야해!