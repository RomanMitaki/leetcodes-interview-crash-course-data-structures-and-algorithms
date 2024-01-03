//Reverse String

//Write a function that reverses a string. The input string is given as an array of characters s.
//You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]]
        end--;
        start++;
    }
};

//Squares of a Sorted Array

//Given an integer array nums sorted in non-decreasing order,
//return an array of the squares of each number sorted in non-decreasing order.

/*
* Input: nums = [-4,-1,0,3,10]
* Output: [0,1,9,16,100]
* Explanation: After squaring, the array becomes [16,1,0,9,100].
* After sorting, it becomes [0,1,9,16,100].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const res =[];
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        if (Math.pow(nums[start], 2) < Math.pow(nums[end], 2)) {
            res.push(Math.pow(nums[end], 2))
            end--;
        } else {
            res.push(Math.pow(nums[start], 2))
            start++;
        }
    }
    return res.reverse()
};

//Number of Laser Beams in a Bank
//https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    const rows = [];
    for (let i = 0; i < bank.length; i++) {
        let line = bank[i];
        let sum = 0;
        for (let char of line) {
            if (char === '1') sum++;
        };
        rows.push(sum);
    }
    
    let ans = 0;
    let first, second;

    for (let devices of rows) {
        if (devices) {
            if (!first) {
                first = devices;
                continue;
            }
            second = devices;
            ans += first * second;
            first = second;
            second = undefined;
        }
    }
    return ans;
};
