// N이 주어졌을 때 00,1로 만들 수 있는 모든 타일 경우의 가짓수

const N = + require('fs').readFileSync('/dev/stdin').toString();

let [a, b] = [1, 2];
for (let i = 2; i <= N; ++i) {
    [a, b] = [b, (a + b) % 15746];
}

console.log(a);

// case 2.
if (N === 1) console.log(1);
else {
    let a = 1;
    let b = 2;
    for (let i = 3; i <= N; i++) {
        const temp = (a + b) % 15746;
        a = b;
        b = temp;
    }
    console.log(b);
}