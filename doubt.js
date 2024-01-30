// const print = () => {
//     if (true) {
//         var employee = {
//             eid: "E102",
//             ename: "Jack",
//             eaddress: "New York",
//             salary: 50000,
//         };

//         let sample = {
//             name: "nehal",
//         };
//     }

//     // console.log(employee);
//     // console.log(sample);
// };

// print();

// console.log(employee);

// console.log("Employee=> ", employee);
// var newEmployee = employee; // Shallow copy
// console.log("New Employee=> ", newEmployee);

// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.

// const string = "abcedfghij"
// const string2 = string.split("")

// console.log(string.slice(2,8))
// console.log(string.slice(5))
// console.log(string2.splice(2,2))
// console.log(string2.splice(3,1,"e","g"))

function print(val) {
    // setTimeout(() => {
    console.log(val);
    // }, 1000);
}

for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        print(i);
    }, 1000);
}

// const arr = []
// arr.filter

// print.call({sample:4})

//////////////
// const array = [1,2,3,2,2,1,3,4,5,6]
// // const unique = []
// // for(const index in array){
// //   if(!unique.includes(array[index])){
// //     unique.push(array[index])
// //   }
// // }
// const unique = new Array(...(new Set(array)))
// console.log("unique", unique)

////////////////
// string1 = "study";
// string2 = "dusty";

// const anagram = (string1, string2) => {
//     if (string1.length !== string2.length) {
//         return false;
//     }

//     const obj1 = {};
//     string1.split("").forEach((ch) => {
//         obj1[ch] ? obj1[ch]++ : (obj1[ch] = 1);
//     });

//     const obj2 = {};
//     string2.split("").forEach((ch) => {
//         obj2[ch] ? obj2[ch]++ : (obj2[ch] = 1);
//     });

//     for (const key in obj1) {
//         if (obj1[key] != obj2[key]) {
//             return false;
//         }
//     }

//     return true;
// };

// console.log(anagram(string1, string2));
