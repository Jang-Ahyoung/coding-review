// 문자열로 주어진 시간(ex. 12:01:00AM )에 대해 오전 오후를 변환한 실제 시간(ex. 00:01:00) 반환하는 프로그램

function timeConversion(s) {
    let type = s.substr(s.length - 2, 2);
    let timeArr = s.split(':');
    timeArr[2] = timeArr[2].substr(0, 2);

    if (type == 'PM' && timeArr[0] != 12) timeArr[0] = Number(timeArr[0]) + 12;
    else {
        if (timeArr[0] == 12) timeArr[0] = '00';
    }
    return timeArr.join(':');
}