let a = [], b = [];
for (let i = 1; i < 10000; ++i) {
    a.push(i + i.toString().split('')
        .reduce(function (prev, curr) {
            return prev + parseInt(curr);
        }, 0));
}
for (let i = 1; i <= 10000; ++i) {
    if (a.indexOf(i) === -1) {
        b.push(i);
    }
}
console.log(b.join('\n'));
