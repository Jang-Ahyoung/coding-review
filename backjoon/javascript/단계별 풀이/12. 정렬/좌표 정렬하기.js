// 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

// 좋은 풀이
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
const arr = input.map((a) => {
    const coordinate = a.split(' ');
    return { x: parseInt(coordinate[0]), y: parseInt(coordinate[1]) };
});

arr.sort(function (a, b) {
    if (a.x - b.x == 0) { // x좌표가 같다면
        return a.y - b.y; // y가 증가하는 오름차순으로
    } else {
        return a.x - b.x; // x가 증가하는 오름차순으로
    }
});

const result = arr.map(num => String(num.x) + " " + String(num.y)).join("\n"); // reduce 함수가 조금 느려, String은 굳이 안써줘도돼!
console.log(result);


// 닮았지만 느린풀이
const [len, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n"); // shift를 써주자
let arr = input.map(num => ({ x: num.split(" ")[0], y: num.split(" ")[1] })); // 훤씬 느려 split을 2번쓰지않아도돼

arr.sort(function (a, b) {
    if (a.x > b.x) return 1;
    else if (a.x < b.x) return -1;
    else {
        if (a.y > b.y) return 1;
        else return -1;
    }
});
const result = arr.reduce((acc, cur) => (acc += `${cur.x} ${cur.y} \n`), '');  // join을 쓰자!
console.log(result);