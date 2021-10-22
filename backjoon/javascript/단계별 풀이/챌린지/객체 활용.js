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

// 특정 값에 할당되있는 값 가져오는 여러 방법
// 풀이 1.
let gradePoint = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"]; // 선언

let point = 10 - gradePoint.indexOf(grade); // 배열 접근
sum += point * weights[index];

// 풀이 2.
const gradeScore = [ // 등급과 가중치 함께 배열에 선언
    { grade: "A+", point: 10 },
    { grade: "A0", point: 9 },
    { grade: "B+", point: 8 },
    { grade: "B0", point: 7 },
    { grade: "C+", point: 6 },
    { grade: "C0", point: 5 },
    { grade: "D+", point: 4 },
    { grade: "D0", point: 3 },
    { grade: "F", point: 0 }
]

let point = gradeScore.filter((element, index) => element.grade == grade)[0].point; //  접근 1. filter

let index = gradeScore.findIndex((element, index) => element.name == grade); // 접근 2. findIndex
let point = gradeScore[index].price;

// 풀이 3. dictionary
let dictObject = {
    "A+": 10,
    "A0": 9,
    "B+": 8,
    "B0": 7,
    "C+": 6,
    "C0": 5,
    "D+": 4,
    "D0": 3,
    "F": 0
};

let point = dictObject[grade];

/* 
    dict 공부 
    dictionary는 key, value 쌍으로 저장되어 리스트에서 인덱스 접근하는 것과 다르게 key 값으로 접근해 원하는 값을 빠르게 찾을 수 있다.
*/
dictObject["A+"]; // 접근
dictObject["사과"] = "APPLE"; // 추가
delete dictObject["사과"]; // 제거

Object.keys(dictObject); // 모든 키값 배열로 반환 -> [2], [Object.keys(dicObject).length - 1] 인덱스 접근 가능
Object.values(dictObject); // 모든 value값 가져오기

Object.keys(dictObject)[2]; // 특정 키값 인덱스로 접근
Object.keys(dictObject).length; // dictionary 길이 구하는 법

"moneky" in dictObject; // 키값 체크, true - false 반환

for (let key in dictObject) {
    if (key == "A0") console.log(key, dictObject[key]); // 키값 in으로 반복 접근 가능
}

// 객체의 속성 / 함수(()괄호 붙어 호출해야함) 접근법 -> 객체.key / 객체['key'] 
let myObj = {
    name: '카레유',
    age: 20,
    hello: function () {
        return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`;
    }
};
let key_hello = 'hello'; // key_name는 myObj에 정의된 속성이 아니므로 .name으로만 접근이 가능하다.
console.log(myObj.hello()) // 키는 객체의 프로퍼티만 허용, 다른 변수에 대입해 key값을 참조하는 건 아래 방식에서만 가능하다.
console.log(myObj[key_hello]()); // 대괄호 안에 키값 문자열로 넣어 접근 

myObj.prop_02 = 2;
myObj["prop_03"] = 3;
myObj['method_02'] = function () { return 'func_02' };

delete myObj.prop_03;

// dict 구현 공부
let gradePoint = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D+", "D0", "F"];

// 두 함수 다 없으면 -1 리턴
gradePoint.indexOf("D+"); // 6
gradePoint.lastIndexOf("D+"); // 7

const arr = [1, 1, '1', 1];
const solution = []
let fromIndex = arr.indexOf(1);
while (fromIndex != -1) {
    solution.push(fromIndex);
    fromIndex = arr.indexOf(1, fromIndex + 1);
    // arr.indexOf("D+",1); 숫자일때만 가능
}

const arr1 = [
    { name: 'banana', price: 1000 },
    { name: 'apple', price: 1500 },
    { name: 'orange', price: 2000 }
];

function findApple(element) { // element, index , array 전달 가능
    if (element.name === 'apple') return true;
}

arr1.findIndex(findApple);// 1
arr1.map((element, index) => element.name == "apple" && index) // [ false, 1, false ]  조건만족하는 값 리턴 받을 수 있어 -> 특별히 지정하지 않는다면 boolean 값 반환
arr1.filter((element, index) => element.name == "apple") // [ { name: 'apple', price: 1500 } ] 이렇게하면 조건 만족하는 전체 배열 리턴받을 수 있어
arr1.findIndex((element, index) => element.name == "apple") // 조건 만족하는 첫번째 인덱스 리턴