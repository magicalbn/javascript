// function addupto(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total = total + i
//     }
//     return total
// }

// function fasteradd(n) {
//     return n * (n+1)/2
// }
// console.log(addupto(7))
// console.log(fasteradd(7))

const add = (n) => {
    return (n * (n + 1)) / 2;
};

console.log(add(4));
