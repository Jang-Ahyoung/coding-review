let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const len = input.shift(); // 첫 줄 빼오고

for (let i = 0; i < len; i++) {
    arr = [...new Set(input[i].split(''))];
    let str = input[i].split('');
    if (arr.length == str.length) {
        continue;
    }
    else {
        str.forEach(value => {
            startIndex = str.indexOf(value);
            endIndex = str.lastIndexOf(value);
            if (endIndex - startIndex != 0) {
                let strSplice = str.splice(startIndex, endIndex - 1).join('');
                let confirmStr = value.repeat(endIndex - startIndex + 1);
                if (strSplice != confirmStr) {
                    break;
                } console.log(strSplice, confirmStr)
            }

        })

    }



}
