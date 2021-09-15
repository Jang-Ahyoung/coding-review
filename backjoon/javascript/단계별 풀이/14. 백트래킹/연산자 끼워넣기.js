// 수의 개수 N, 0:+, 1:-, 2:*, 3:/
// 연산자가 배치되는 모든 경우의 수를 조회하여 최대 최솟값을 구한다.
// * (음수 / 양수) 일 경우 (양수 / 양수) 로 바꿔주고, 몫을 취한 뒤 결과 값을 음수로 출력

const data = require("fs").readFileSync("/dev/stdin", "utf8").toString().trim().split("\n");

const expression = [], number = [];
let max = -1000000000, min = 1000000000;

data.map((item, index) => {
    if (index === 0) return;
    const num = item.split(" ");
    for (let i = 0; i < num.length; i++) {
        if (index === 1) number.push(parseInt(num[i]));
        else expression.push(parseInt(num[i]));
    }
});

const len = number.length;
function find(sum, index) {
    if (index >= len) {
        if (max < sum) max = sum;
        if (min > sum) min = sum;
        return;
    }
    for (let i = 0; i < 4; i++) {
        if (expression[i] === 0) continue;
        expression[i]--;
        switch (i) {
            case 0: find(sum + number[index], index + 1);
                break;
            case 1: find(sum - number[index], index + 1);
                break;
            case 2: find(sum * number[index], index + 1);
                break;
            case 3:
                const c = Math.floor(Math.abs(sum) / Math.abs(number[index]));
                if ((sum < 0 && number[index] > 0) || (sum > 0 && number[index] < 0)) find(c != 0 ? -c : c, index + 1);
                else find(c, index + 1);
                break;
        }
        expression[i]++;
    }
}

find(number[0], 1);
console.log(max);
console.log(min);