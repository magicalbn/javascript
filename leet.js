/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//     left = 0;
//     right = 1;
//     currentSum = nums[left];
//     while (left < nums.length) {
//         console.log("current left", left);
//         newSum = nums[left];
//         right = left;
//         while (right < nums.length) {
//             console.log("current right", right);
//             if (newSum > currentSum) {
//                 console.log("found highes", newSum);
//                 currentSum = newSum;
//             }

//             newSum = newSum + nums[++right];
//             console.log("sum", newSum);
//             // right++;
//         }
//         left++;
//     }
//     return currentSum;
// };

var maxSubArray = function (nums) {
    // Initialize the max sum...
    let maxSum = nums[0];
    // Traverse all the element through the loop...
    for (let i = 1; i < nums.length; i++) {
        // nums[i] represents the largest sum of all subarrays ending with index i...
        // then its value should be the larger one between nums[i]...
        // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
        // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
        // console.log(
        //     "calc==>",
        //     0,
        //     nums[i - 1] + nums[i],
        //     Math.max(0, nums[i - 1]) + nums[i]
        // );
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        // if nums[i] > maxSum then maxSum = nums[i]...
        console.log("===>", i, nums);
        if (nums[i] > maxSum) maxSum = nums[i];
    }
    return maxSum; // return the contiguous subarray which has the largest sum...
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
