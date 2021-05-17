// 내 풀이

function solution(nums) {
    const set = new Set(nums);  // set의 크기는 lenth가 아닌 size써줘야해!
    const Arr = [...set].length; // 줄여서 Arr = [...new Set(nums)];
    const maxNum = nums.length / 2;

    return Arr > maxNum ? maxNum : Arr;
}