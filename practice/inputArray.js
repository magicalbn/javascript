const prompt = require("prompt-sync")();

const n = prompt("value for a: ")
const array = []

for (let i = 0; i < n; i++) {
    array[i] = prompt(`value at index ${i}: `)
}

console.log(array)