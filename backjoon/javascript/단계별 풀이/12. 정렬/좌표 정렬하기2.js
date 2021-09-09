const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

const arr = input.map((a) => { // (a) 감싸주기
    const coordinate = a.split(' ');
    return { x: parseInt(coordinate[0]), y: parseInt(coordinate[1]) };
});

arr.sort((a, b) => { // (a,b)=>{} ('o') , 함수 다음엔 () 소괄호가 아니야!
    if (b.y - a.y == 0) return a.x - b.x;
    else return a.y - b.y;
})

const result = arr.map(num => num.x + " " + num.y).join("\n");
console.log(result);