//given an array and target, find the indeices that addup to it

const getIndices = (arr, target) => {
    const obj = {}
    for(let i = 0 ;i<arr.length;i++){
        let n = arr[i]
        console.log(i, n, obj[target-n])
        if(obj[target-n]>=0){
            return [obj[target-n],i ]
        } else {
            obj[n] = i
        }
        

        // console.log(obj, i)
    }
}


console.log(getIndices([2,7,3,2,5,6],8))