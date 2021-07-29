// A, B, C가 주어졌을 때, 손익분기점을 구하는 프로그램을 작성하시오.

let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const fixedCost = input[0] * 1; // 문자열 숫자로 변환해줘
const sellingPrice = input[1] * 1;
const marketPrice = input[2] * 1;

const margin = marketPrice - sellingPrice;
const count = Math.floor(fixedCost / margin) + 1

console.log(margin <= 0 ? -1 : count);