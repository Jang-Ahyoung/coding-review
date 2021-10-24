/*
  - Set은 value를 키 값으로 갖는 중복되지 않는 컬렉션
  - 데이터가 자신의 멤버인지 확인하는 작업을 빨리 처리하기 위한 뚜력한 목적을 가지고 있다.
  - 수정 가능하지만 인덱스로 접근할 수는 없다.
*/
let arr = [1, 4, 1, 6, 7];
arr = [... new Set([...arr])]; // 중복 없는 배열 생성 [ 1, 4, 6, 7 ]
let set = new Set([...arr]); // Set { 1, 4, 6, 7 }

// 제공 메서드
set.size;  // set의 크기
set.has(1); // Set에 존재하는 값인데 true, false반환
set.add(10).add(15); // set에 추가하는 메소드로 체이닝이 될 수 있다.
set.delete(3); // 없는 값이여도 에러 발생하지 않아
set.clear(); // set의 모든 값 제거

set.forEach((value1, value2, set) => console.log(value1, value2, set)); // forEach 제공하지만 map, filter, some, every등의 내장함수는 구현할 수 없다. index 접근이 안되기 때문에 forEach 함수의 매개변수는 value, value, 전체 set 값이다.

arr.forEach((value, index, arr) => console.log(value, index, arr)); // 기본 배열에서 forEach 함수의 매개변수는 value, index, arr 전체를 전달해준다. (map, filter 동일)

// map은 순회 후 전체 배열 반환하고, 조건이 없을 경우 undefined로 채워진다.  
// filter 함수는 순회 후 조건에 맞는 특정 배열만 반환하며, 없을 경우 빈 []를 전달한다.
arr.filter((a, b, x) => console.log(a, b, x));


/*
  Map은 Key - Value 의 쌍으로 이루어진 컬렉션 ( = Object) 
  Object 문제점
  - 객체의 키로 내장 메소드의 이름을 사용할 시 이름 충돌
  - 속성의 Key는 항상 문자열 이어야 한다.
  - size, length 같은 매소드 없기 때문에 Object.keys(dictObject).length 해줘야돼
  - 일반 객체를 반복하려면 많은 비용이 소모
  - iterable 하지 않기 때문에 iterable을 사용하는 모든 문법에 객체를 사용할 수 없다.
*/

const map = new Map;
map.set('ang', 'peng'); // 객체를 키와 값으로 받을 수 있다.
map.set('deak', 'peo');
console.log(map);

map.forEach((value, key) => {
    console.log(value, key);
})

map.has('ang'); // 키값 확인
map.size;
map.clear();
console.log(map);