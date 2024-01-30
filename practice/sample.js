const fs = require("fs")

const prompt = require("prompt-sync")()


const path = prompt("Enter path: ")

console.log(fs.readFileSync(path,{encoding:'utf-8'}))

const a = ["facebook","microsoft","netflix","google","facebook","microsoft","facebook"]

const array = Array.from(new Set(a))
const hellow = Array(6).fill("hellow")
console.log(array,hellow)