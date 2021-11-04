let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

function solution(record) {
    const userInfo = {}; // id별 고유 이름 담는 객체
    const action = []; // Enter, Leave, Change
    const stateMapping = { // 출력 메시지 객체 **
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }
    record.forEach((data) => {
        const [state, id, nick] = data.split(' '); // 상태 , id, 닉네임 이름으로 나누어 담고
        if (state !== "Change") { // 상태가 Enter, Leave일 경우에만
            action.push([state, id]); // 상태와 id값을 담아준다.
        }
        if (nick) {
            userInfo[id] = nick; // 닉네임이 있을 경우 ( = Change, Enter) 에만 이름을 대입해준다.
        }
    })

    return action.map(([state, uid]) => {
        return `${userInfo[uid]}${stateMapping[state]}`
    })
}


// 내풀이
function solution(record) {
    let answer = [];
    let nameObject = {}

    for (let i = 0; i < record.length; i++) {
        const [action, user, name] = record[i].split(' ');
        if (action != 'Change') answer.push([action, user]);
        if (name) nameObject[user] = name;
    }

    for (let i = 0; i < answer.length; i++) {
        let setence = answer[i][0] == "Leave" ? "님이 나갔습니다." : "님이 들어왔습니다.";
        answer[i] = nameObject[answer[i][1]] + setence;
        /*
        if-else 문 작성 코드
        if(answer[i][0] == "Leave"){
            answer[i] = nameObject[answer[i][1]] + "님이 나갔습니다.";
        }
        else{
            answer[i] = nameObject[answer[i][1]] + "님이 들어왔습니다."
        }
        */
    }
    return answer;
}