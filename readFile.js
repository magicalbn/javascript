

const fs = require('fs')

const data = fs.readFileSync('./sample.txt', { encoding: 'utf-8' })

let StringArray = data.split(/\s/)
console.log(StringArray)
StringArray = StringArray.filter(each => each != "")
console.log(StringArray)
const Count = {}
// for(let i=0;i<StringArray.length;i++){
//     let count = 1
//     for(let j=i+1;j<StringArray.length;j++){
//         if(StringArray[i]==StringArray[j]){
//             count++;
//             StringArray.splice(j,1)
//         }

//     }
//     if(count>1)
//     Count = {
//         ...Count,
//         [StringArray[i]]:count
//     }
// }

for (let word of StringArray) {
    Count[word] ? Count[word]++ : Count[word] = 1
}

let finalobject = {}

Object.keys(Count).map(each => {
    if (Count[each] < 2)
        delete Count[each]
})

console.log(Count)

const ArrayObject = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const newObject = ArrayObject.filter(each => each.id != 2)

console.log({
    orignal: ArrayObject,
    new: newObject

})
