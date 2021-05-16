// 1번 풀이.

function solution(answers) {
    let answer = [];
    let stu1 = [1, 2, 3, 4, 5];
    let stu2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let stu3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 정답 중 학생의 답과 비교해 맞춘 답의 갯수(.length) -> 변수에 저장
    let one = answers.filter((answer, index) => answer === stu1[index % stu1.length]).length;
    let two = answers.filter((answer, index) => answer === stu2[index % stu2.length]).length;
    let three = answers.filter((answer, index) => answer === stu3[index % stu3.length]).length;
    let max = Math.max(one, two, three); // 최댓값 (가장 많이 맞춘 학생의 갯수) 저장

    // 최댓값과 일치할 경우 빈배열(answer)에 해당 학생 번호 (1,2,3) -> push 해 answer값 return!
    if (one === max) answer.push(1);
    else if (two === max) answer.push(2);
    else answer.push(3);

    return answer;
}

solution([1, 2, 3, 4, 5])


// 2번 풀이.
const solution = (answers) => {
    let students = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]; // 배열에 각 학생이 찍을 정답 대입
    let answer = [];

    for (student of students) { // 학생배열 속 값을 돌며
        answer.push(
            answers.reduce((acc, cur, idx) => { // ( cur==student[idx % student.length] ? acc++ : acc, acc),0))
                // 정답과 학생의 답이 일치할 경우 -> acc값에 +1 해주고 아닐경우 그대로 acc
                cur == student[idx % student.length] ? acc++ : acc;
                return acc;
            }, 0));
    }
    return answer.reduce((acc, cur, idx) => (
        // answer 배열에 저장된 값 돌며 -> 현재값이 최대값일 경우 acc
        cur === Math.max(...answer)
            ? acc.push(idx + 1) // acc의 값을 배열 값 갱신해줘
            : acc, acc)
        , []) // 누적의 초깃값을 []로 설정!
}

solution([1, 2, 3, 4, 5])
