const a = "hello";
let b = { val1: "hello" };
const manipulate = (c, d) => {
    c = "world";
    d.val2 = "world";
    d = "sample";
};
manipulate(a, b);
console.log(a, b);
