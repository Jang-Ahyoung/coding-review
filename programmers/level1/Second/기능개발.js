progresses = [93, 30, 55]
speeds = [1, 30, 5]

function solution(progresses, speeds) {
    var answer = [0];
    let rest = progresses.map((work) => 100 - work);
    let needDay = rest.map((work, index) => Math.ceil(rest[index] / speeds[index]));
    // 줄여서 = progresses.map((work,index)=>Math.ceil((100-work) / speeds[index]));

    let deployDay = needDay[0]; // 첫 배포 날짜 대입 
    for (let i = 0, j = 0; i < needDay.length; i++) { // 작업 수만큼 돌면서
        if (needDay[i] <= deployDay) answer[j] += 1; //  남은 작업일이 첫 배포 날짜보다 작으면 -> 함께 배포에 추가 +1
        else {
            deployDay = needDay[i];   // 아닐경우 다음 배포 날짜 업데이트
            answer[++j] = 1;          // 다음 날짜로 추가
        }
    }
    return answer;
}