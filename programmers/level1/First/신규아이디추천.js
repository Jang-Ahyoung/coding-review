function solution(new_id) {
    let answer = new_id.toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/\.$/, '');
    let len = answer.length
    return len < 3 ? answer + answer.charAt(len - 1).repeat(3 - len) : answer;
}