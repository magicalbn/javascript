const myData = {
    x: {
        y: {
            z: [
                {
                    x: "hello"
                },
                {
                    z: "new"
                },
                {
                    m: "world"
                }
            ]
        }
    }
}

const myData2 = {
    x: {
        y: {
            z: [
                {
                    x: "hello"
                },
                {
                    z: "new"
                },
                {
                    m: "world"
                }
            ]
        }
    },
    y: {
        z: [
            {
                x: "hello"
            },
            {
                z: "new"
            },
            {
                m: "world"
            }
        ]
    },
   
}

const myMap = {
    x: "b",
    z: "c"
}

const dumbApproach = (object, mapping) => {
    let string = JSON.stringify(object)

    Object.keys(mapping).map(each => {
        var find = each.toString();
        var re = new RegExp(find, 'g');
        string = string.replace(re, mapping[each].toString());
    })

    return JSON.parse(string)
}

const validApproach = (object, mapping) => {
    let newObject
    if (typeof (object) == "object") {
        if (Array.isArray(object)) {
            newObject = []
            object.map(each => {
                newObject.push(validApproach(each, mapping))
            })
        } else {
            newObject = {}
            Object.keys(object).map(key => {
                let keyRename
                if (mapping[key]) {
                    keyRename = mapping[key]
                } else {
                    keyRename = key
                }
                newObject[keyRename] = validApproach(object[key], mapping)
            })
        }
        return newObject
    } else {
        return object
    }
}

//console.log(Array.isArray(myData), Array.isArray(myData.x.y.z), typeof (myData.x.y.z))
const finalObject = dumbApproach(myData, myMap)
//console.log(finalObject, finalObject.b.y.c)

const finalObject2 = validApproach(myData, myMap)
console.log("expected output: ", finalObject2)
console.log("inner array: ", finalObject2.b.y.c)
//finalObject2.y.c
