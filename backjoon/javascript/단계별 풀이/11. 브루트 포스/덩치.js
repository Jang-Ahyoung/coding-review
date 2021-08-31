// 첫번째 length로 받아주고 나머지 차례대로 배열 속으로 넣어줘
const [len, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const person = arr.map((data) => ({ weight: data.split(" ")[0], height: data.split(" ")[1], rank: 1 })); // 각 정보를 객체 속에 담아줘

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) { // 자신을 제외한 전체를 다 비교해주어야하니 i !== j
        if (i !== j) {
            if ((person[i].weight < person[j].weight) && (person[i].height < person[j].height)) {
                person[i].rank++;
            }
        }
    }
}
console.log(person.map(data => data.rank).join(" "));