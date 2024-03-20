const prompt = require("prompt");

// prompt.get("string",(err,input)=>{
//     //console.log(input.string.split("").reverse().join(""))
//     var revString = ""
//     for(let char of input.string){
//         revString = char + revString
//     }
//     console.log(revString)
// })

const reverse = (string) => {
    const len = string.length;
    if (len <= 0) {
        return string;
    } else return reverse(string.slice(1)) + string[0];
};

const reverseNum = (num) => {
    if (num) {
        return ~~(num % 10) * 10 + reverseNum(~~(num / 10));
    } else return num;
};

// console.log(reverse("sample"));
console.log(reverseNum(201123));

const sum = (arr) => {
    return arr.reduce((sum, each) => {
        console.log({ each, sum });
        return each + sum;
    }, 0);
};

console.log(sum([1, 1, 1, 1, 1, 1]));
