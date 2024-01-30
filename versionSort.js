

const arr = [
    "1.1.2",
    "1.1",
    "6.5.8",
    "6.7.8",
    "4.2.5",
    "2.4",
    "2.3",
    "6.5",
    "3.2",
    "1.1.4"
]

const compareValues = (a,b) =>{
    num1 = a.split(".").map(each => parseInt(each))
    num2 = b.split(".").map(each => parseInt(each))
    let arrayLength
    if(num1.length<num2.length)
        arrayLength = num1.length
    else arrayLength = num2.length
    let index 
    for(let i = 0 ; i<arrayLength; i++){
      //  console.log('Comparing: ',num1[i],num2[i])
       // console.log("i",i)
        index = i
        if(num1[i]>9)


        if(num1[i]>num2[i]){
            return true
        }
        else if(num1[i]<num2[i]){
            return false
        }
    }


    
   // console.log("all values",index,num2.length,num1.length)
    if(index==num2.length-1){
        return true
    }
    else return false
    

   
}

for (let i = 0; i < arr.length; i++){
    for(let j=0;j<arr.length - i - 1; j++){
        if(compareValues(arr[j],arr[j+1])){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}

arr.map(each =>
    console.log(each)
)

//console.log(compareValues("2.4.1","2.4"))