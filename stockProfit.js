//given an array of prices where prices[i] is price of stock on ith day,
//return the maximu profit, else 0

//[7,1,5,3,6,4] --> 5
//[7,6,5,4,3,2] --> 0

const getProfit = (prices) => {
    let globalProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const currentProfit = prices[j] - prices[i];
            if (currentProfit > globalProfit) {
                globalProfit = currentProfit;
            }
        }
    }

    return globalProfit;
};

var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    while (right < prices.length) {
        console.log({
            left,
            right,
            values: [prices[right], prices[left]],
            value: prices[right] > prices[left],
        });
        if (prices[left] < prices[right]) {
            const currentProfit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, currentProfit);
        } else {
            left = right;
        }
        right++;
    }
    return maxProfit;
};

// const getProfit2 = () => {
//     let globalProfit = 0;
//     for (let i = 0; i < prices.length - 1; i++) {
//         if
//     }
// }

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
