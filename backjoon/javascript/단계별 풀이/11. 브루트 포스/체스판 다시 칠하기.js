const [n, m, ...board] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const lines = ["WBWBWBWB", "BWBWBWBW"];
let min = 64;

// '0-8, 1-9, 2-10'과 같이 8개로 열과 행을 채울 수 있는 경우의 수 
for (let i = 0; i <= n - 8; i++) { // 0, 1
    for (let j = 0; j <= m - 8; j++) { // 0,1,2,3
        for (let type = 0; type < 2; type++) {
            let count = 0;
            for (let x = i; x < i + 8; x++) { // 시작하는 숫자부터 8개씩 돌면서
                for (let y = j; y < j + 8; y++) {
                    if (board[x][y] !== lines[(x + type) % 2][y - j]) { // 표본과 값지 않으면 count
                        count++;
                    }
                }
            }
            if (min > count) min = count; // 다시 칠해야 하는 칸의 수를 세서 그 최솟값을 구한다.
        }
    }
}
console.log(min);