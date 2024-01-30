const prompt = require('prompt-sync')();

const string = prompt("Enter String: ").toLowerCase()

const stringArray = string.split("").filter(ch=>/^[a-zA-Z]+$/.test(ch))

//console.log(stringArray)

const numberofAlphabets = Array.from(new Set(stringArray)).length

console.log(numberofAlphabets)
console.log({
   // regex:/^[a-zA-Z]+$/.test(string),
   // words:string.split(/\s/g)
})



