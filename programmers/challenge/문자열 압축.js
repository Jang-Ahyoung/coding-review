// 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수 작성

function solution(str){
    if(str.length == 1) return 1; // 문자열 길이 1인 경우 1 return
    let answer = []; // 빈 배열 생성
    let range = parseInt(str.length / 2);
  
    for(let i = 1; i <= range; i++){ // 최대로 압축할 수 있는 길이가 문자열 길이의 절반만큼 반복
      let cnt = 1;
      let string = '';
      for(let j = 0; j < str.length; j += i) { // 입력 문자열 길이만큼 돌며
              const current = str.substr(j, i);
              const next = str.substr(j+i, i);
              if(current === next) {
                  cnt++;
              } else {
                  string = cnt > 1? string + cnt + current : string + current;
                  cnt = 1;
              }
          }
           answer.push(string.length);
    }
    return Math.min(...answer);
  }