let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
input = input.map(value => {
    return Number(value.toString().split('').reverse().join(''));
})
console.log(input[0] > input[1] ? input[0] : input[1]);