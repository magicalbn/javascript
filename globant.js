// var a = { name: "Anup" };

// var b = 2;

// var c = [];

// function change(tA, tB, tC) {
//     tA.name = "Nikhil";
//     tB = 3;
//     tC.push("c");
// }

// change(a, b, c);

// console.log(a.name, b, c);

// ---
// let name = "Nikhil";

// function b() {
//     console.log(name);
//     console.log(b);
//     var name = "Hridya";
//     console.log(name);
// }

// b();
// console.log(name);

// var person = {
//     name: "arpit",
//     getDetail: function () {
//         console.log(this.name);
//     },
//     getName: () => {
//         console.log(this.name);
//     },
// };

// person.getDetail(); //arpit
// person.getName(); //undefined

var username = "Anup";
function b() {
    setTimeout(() => {
        console.log("timeout: ", username);
    }, 0);

    new Promise((res, rej) => res("resolve: ")).then((res) =>
        console.log(res, username)
    );

    console.log(username);

    console.log("b");

    var username = "Mayur";
}
b();
//106=>Undefined
//108=>b
//104 resolve: Mayur
//101=>timeout: username

// var a = ["a", "b", "c", "d", "a", "c", "e", "f", "d", "g", "h"];
// //[a,c,d]

// const charMap = {};
// const result = [];

// a.forEach((char) => {
//     if (charMap[char]) {
//         result.push(char);
//     } else {
//         charMap[char] = 1;
//     }
// });

// console.log(result);
