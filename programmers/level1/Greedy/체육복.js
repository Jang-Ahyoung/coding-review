// let n = 5
// let lost = [1,2,4]
// let reverse = [1,3,5]

function solution(n, lost, reserve) {
  // 실제 체육복 잃어버린 학생 _ realLost
  const realLost = lost.filter(realLost => !reserve.includes(realLost));
  // 실제 여분 가진 학생 _ realReserve
  let realReserve = reserve.filter(realReserve => !lost.includes(realReserve));

  const num = realLost.filter(realLost => {
    //actualLost 요소와 비교 -> 절댓값 1인 첫번째 요소 찾아
    const student = realReserve.find(realReserve => Math.abs(realLost - realReserve) === 1);
    // 범위 안에 빌려줄 학생 없을경우 true 리턴 -> 해당 요소는 새로운 actualLost배열에 들어가게 된다. 
    if (!student) return true;
    // 빌려준 학생의 경우 actualReserve 배열에서 빼주어 업데이트 해준다.
    realReserve = realReserve.filter(realReserve => realReserve !== student);
  }).length;;

  return n - num;
};

//  solution(n,lost, reverse);
