const hammingDistance = (num1, num2) => {
    num1 = num1.toString(2);
    num2 = num2.toString(2);
   
    // if (num1.length !== num2.length) {
    //     throw new Error("string must be of same length");
    // }
    console.log(num1, num2);
    if (num1.length < num2.length) {
        while (num1.length != num2.length) {
            num1 = "0" + num1;
        }
    } else {
        while (num1.length != num2.length) {
            num2 = "0" + num2;
        }
    }
    console.log(num1, num2);
    let distance = 0;

    for (let x = 0; x < num1.length; x++) {
        if (num1[x] != num2[x]) {
            distance++;
        }
    }

    return distance;
};

const arr = []


console.log(hammingDistance(1, 4));
