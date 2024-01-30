function factorial(value) {
    if (value === 1) return 1;
    return value * factorial(value - 1);
}

console.log(factorial(7));

const collectOddValues = (array) => {
    let newArr = [];

    if (array.length == 0) return newArr;

    if (array[0] % 2 != 0) {
        newArr.push(array[0]);
    }

    return newArr.concat(collectOddValues(array.splice(1)));
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]));

// function reverse(string) {
//     let newString = "";
//     if (string.length === 0) return string;

//     newString = string[0];

//     return reverse(string.slice(1)) + newString;
// }

console.log(reverse("awesome"));

function reverse(string) {
    if (!string.length) {
        return string;
    }
    return reverse(string.slice(1)) + string.slice(0, 1);
}
