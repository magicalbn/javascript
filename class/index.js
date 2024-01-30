// const ReadFile = require("./readFile");
// const ApiCalls = require("./apiCalls")
// const prompt = require("prompt-sync")();

const APICall = require("./apiCalls");
const ReadFile = require("./readFile");

// const JSONdata = new ReadFile('./class/sample.json')
// JSONdata.read();
// const name = prompt('eneter name: ')

// console.log({
//     fileData: JSONdata.getData,
//     Specific: JSONdata.readSpecific(name).length!=0 ? JSONdata.readSpecific(name) : "Not available",
//     private: JSONdata.fileData
// })

// const apiData = new ApiCalls("https://jsonplaceholder.typicode.com/users")
// apiData.runAPI().then(() =>dataManipulation(apiData.getData))

// const dataManipulation = (data) => {
//     console.log({
//         length : data.length,
//         names: data.map(each=>each.name),
//         findbyName: data.filter(each=>each.name.includes("nn"))
//     })
// }

// const URLdata = new APICall("https://jsonplaceholder.typicode.com/todos/1");
// (async () => {
//     await URLdata.fetchData();
//     console.log(URLdata.getAPIdata());
// })();

const fileClass = new ReadFile("sample.json");

fileClass.readData();
console.log(fileClass.fileData);
