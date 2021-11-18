function countingSort(arr) {
    let max = Math.max(...arr);
    let answer = new Array(max + 1).fill(0);
    arr.forEach((num) => answer[num] += 1);

    return answer.join(' ');

}