let input = require('fs').readFileSync('/dev/stdin').toString().split('');
input.sort((a, b) => b - a); //sort().reverse()도 가능
console.log(input.join(''));