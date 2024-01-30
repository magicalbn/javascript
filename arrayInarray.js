
const prompt = require("prompt")

const array = [1, 2, 3, 4, 5, 6, 7, 8]

const breakit = (n) => {
    const newArray = []
    let tempArray = []
    let count = 0;
    for (let each of array) {
        count++
        tempArray.push(each)
        if (count == n) {
            newArray.push(tempArray)
            tempArray = []
            count = 0
        }
    }
    console.log(tempArray)
    if (tempArray.length)
        newArray.push(tempArray)
    return newArray
}

prompt.get("number", (err, data) => [
    console.log(breakit(parseInt(data.number)))
])
