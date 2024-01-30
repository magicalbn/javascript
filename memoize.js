const memoizeFucntion = (fn) => {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
};

const clumsyProduct = (n1, n2) => {
    for (let i = 0; i < 100000000; i++) {}
    return n1 * n2;
};
const memoizeClumsyProduct = memoizeFucntion(clumsyProduct);

console.time("first");
console.log(memoizeClumsyProduct(5, 6));
console.timeEnd("first");

console.time("second");
console.log(memoizeClumsyProduct(5, 6));
console.timeEnd("second");
