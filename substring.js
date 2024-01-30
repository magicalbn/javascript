const prompt = require("prompt-sync")();

const string = prompt("enter string: ").toLowerCase();
const substring = prompt("enter substring: ").toLowerCase();

const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, d);
    };
};

let flag = 0;
let count = 0;
//let regex = `/${substring}/g`
// -----------------------------
//let count = string.match(/neh/g);

for (var i = 0; i < string.length; i++) {
    if (string[i] == substring[0]) {
        for (let j = 1; j < substring.length; j++) {
            if (string[i + j] && string[i + j] == substring[j]) flag = 1;
            else {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            count++;
            i = i + substring.length - 1;
            flag = 0;
        }
    }
}
//-------------------

//console.log(string.split(substring).length - 1)
console.log(count);
