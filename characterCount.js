const string = "NNNNeehal";

const stringLower = string.toLowerCase();

let stringarray = stringLower.split("");

// let Count = {}

// for (let i = 0; i < stringarray.length; i++) {
//     let count=0

//     for (let j = i + 1; j < stringarray.length; j++) {
//         if (stringarray[i] == stringarray[j])
//             count++,
//             stringarray.splice(j,1)

//     }
//     console.log(stringarray[i],count)
//     Count = {
//         ...Count,
//         [stringarray[i]]:count
//     }
// }

let Count = {};

for (let char of stringLower) {
    console.log(Count);
    Count[char] ? ++Count[char] : (Count[char] = 1);
}

console.log(Count);
