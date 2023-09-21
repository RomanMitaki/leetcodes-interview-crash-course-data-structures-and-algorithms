// /Running Sum of 1d Array

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.

//Input: nums = [1,2,3,4]
//Output: [1,3,6,10]
//Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const ans = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        ans.push(nums[i] + ans[ans.length - 1]);
    }
    return ans;
};

//Minimum Value to Get Positive Step by Step Sum

//Given an array of integers nums, you start with an initial positive value startValue.
//In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
//Return the minimum positive value of startValue such that the step by step sum is never less than 1.

//Input: nums = [1,-2,-3]
//Output: 5

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    const prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    let ans = Math.min(...prefix)
    return ans > 0 ? 1 : Math.abs(ans) + 1
};

//K Radius Subarray Averages

//You are given a 0-indexed array nums of n integers, and an integer k.
//The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.
//Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
//The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.
//For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.
/*
* Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
* Output: [-1,-1,-1,5,4,4,-1,-1,-1]
* Explanation:
* - avg[0], avg[1], and avg[2] are -1 because there are less than k elements before each index.
* - The sum of the subarray centered at index 3 with radius 3 is: 7 + 4 + 3 + 9 + 1 + 8 + 5 = 37.
*  Using integer division, avg[3] = 37 / 7 = 5.
* - For the subarray centered at index 4, avg[4] = (4 + 3 + 9 + 1 + 8 + 5 + 2) / 7 = 4.
* - For the subarray centered at index 5, avg[5] = (3 + 9 + 1 + 8 + 5 + 2 + 6) / 7 = 4.
* - avg[6], avg[7], and avg[8] are -1 because there are less than k elements after each index.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    if (k === 0) return nums;
    let window = k*2+1;
    if (nums.length < window) return new Array(nums.length).fill(-1);
    const prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length-1]);
    }
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i < k || i >= nums.length - k) {
            ans.push(-1);
        } else {
            let sum = prefix[i + k] - prefix[i - k] + nums[i - k];
            ans.push(Math.floor(sum/window));
        }
    }
    return ans;
};

