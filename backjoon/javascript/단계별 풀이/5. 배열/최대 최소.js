let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let len = Number(input[0]); // 숫자로 꼭 바꿔주는 습관~!
let numbers = input[1].split(" ").map(x => Number(x)).sort((a, b) => a - b)

console.log(numbers[0] + " " + numbers[len - 1])