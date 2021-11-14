// 조이스틱 방향을 이용해 A로 이루어진 문자열을 제시된 문자열로 변환하는 최솟값 구하는 프로그램

/*
 테스트 케이스 'ZAAAAZZZZZZ' 을 해결하기 위해선 A 부분을 통과하지 않은 채 최말단으로 돌아가야 가장 최솟값을 얻을 수 있다.
*/
function solution(name) {
    let cnt = 0;
    let arr = name.split('');
    let len = arr.length;
    let location = 0;

    const handleCharMove = (char) => {
        let index = char.charCodeAt() - 65;
        return Math.min(index, 26 - index);
    }

    arr.forEach((char, index) => {
        if (index == 0 && char !== 'A') cnt += handleCharMove(char);
        else {
            if (char !== 'A') {
                const charMove = handleCharMove(char);
                const cursorMove = Math.min(index - location, len - index);
                cnt += (charMove + cursorMove);
                location = index;
            }
        }
    })
    return cnt;
}

// 옳은 풀이
function solution(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        let diff = name[i].charCodeAt() - 'A'.charCodeAt();
        sum += diff > 13 ? 26 - diff : diff;
    }

    let minMove = name.length - 1;
    for (let i = 1; i < name.length; i++) {
        if (name[i] === 'A') {
            for (var j = i + 1; j < name.length; j++) {
                if (name[j] !== 'A') {
                    break;
                }
            }

            const left = i - 1;
            const right = name.length - j;
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

            i = j;
        }
    }

    return sum + minMove;
}