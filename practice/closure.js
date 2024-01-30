// var a = 4

// const closure = () =>{
//     let b = a * a
//     setTimeout(()=>{
//         console.log({
//             closure: b
//         })
//     },3000)
// }

// closure()
// a+=3
// console.log(a)

// for(let i = 0; i< a.length; i++){
//     for(let j=0;j=i+1;j++){
//         if(a[j]>a[j+1]){
//             let temp = a[j]
//             a[j]=a[j+1]
//             a[j+1]= temp
//         }
//     }
// }

function greet(a) {
    return function user(b) {
        console.log(`${a} from ${b}`);
    };
}

const x = greet("hello");
x("nehal");
