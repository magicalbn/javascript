//N,C,A
// 4 , 5, [2,1,4,1]

////////////////////
//index 1 = 1

//[3,1,5,2]

//[4,2,6,2]

//2

//2 * C

//////////
//index 0 = 2

//[2,2,5,2]

//2

//ignored

const fucn = (N, C, A) => {
    result = -1;

    const update = (array, i) =>
        array.map((each, index) => {
            if (index == i) {
                return each;
            } else return each + 1;
        });

    for (let i = 0; i < N; i++) {
        console.log("======>using new start location: ", i);
        console.log("final result: ", result);
        let newArry = A;
        currentValue = newArry[i];
        newArry = update(newArry, i);
        newArry.forEach((each, index) => {
            // console.log(newArry, index);

            if (index == i) {
                return;
            } else if (each == currentValue + 1) {
                console.log("considering array: ", newArry, currentValue);
                console.log("next move to index: ", index);
                currentValue = each;
                if (currentValue > result) {
                    result = currentValue;
                }
                newArry = update(newArry, i);
            }
        });
        console.log(
            "max value received from current iteration: ",
            currentValue
        );
    }

    return result;
};

console.log(fucn(4, 5, [2, 2, 3, 2]));
