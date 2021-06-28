// 대각선 지나는 사각형 갯수 공식 = 가로+세로-(사각형 가로&세로의 '최대'공약수)
// -> 유클리드 호제 이용 풀이 : 
// EX) 3,5의 공동약수 중 가장 큰 값은 1인데 이값은
// 5%3=2, 3%2 = 1, 2%1 = '0' 이렇게 W/H의 나머지가 0이 나올때까지 반복하여 0이 나올 수 있었던 H('1')를 반환하는 행위!

// 유클리드 호제법을 이용한 최대 공약수 구하는 함수
function gcd(w, h) {
    const mod = w % h;
    if (mod === 0) {
        return h;
    }
    return gcd(h, mod);
}

function solution(w, h) {
    const gcd = gcd(w, h);
    return w * h - (w + h - gcd);
    ;
}


// 풀이법 1.
function solution(w, h) {
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };

    return w * h - (w + h - gcd(w, h));
}

// 풀이법 2.
function solution(w, h) {
    const slope = h / w;
    let result = 0;

    for (let i = 1; i <= w; i++) {
        result += Math.ceil(slope * i);
    }

    return ((h * w) - result) * 2;
}