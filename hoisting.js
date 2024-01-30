// function main() {
//     const data = "sample";
//     function inside() {
//         console.log(data);
//     }
//     return inside;
// }

// const func = main();
// func();

(function () {
    var a = 3;
    (() => {
        var a = 2;
    })();

    console.log(a);
})();
