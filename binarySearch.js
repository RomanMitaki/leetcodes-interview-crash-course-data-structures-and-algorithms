//Binary Search

//https://leetcode.com/problems/binary-search/

//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
//You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};

//Search a 2D Matrix

//https://leetcode.com/problems/search-a-2d-matrix/

//You are given an m x n integer matrix matrix with the following two properties:
//Each row is sorted in non-decreasing order.
//The first integer of each row is greater than the last integer of the previous row.
//Given an integer target, return true if target is in matrix or false otherwise.
//You must write a solution in O(log(m * n)) time complexity.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    let start = 0, end = m * n - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        if (matrix[row][col] === target) return true;
        if (matrix[row][col] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
};

//Successful Pairs of Spells and Potions

//https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/

//You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.
//You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.
//Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const search = (arr, target) => {
        let start = 0, end = arr.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return start;
    }
    const ans = [];
    let m = potions.length;
    for (let spell of spells) {
        let target = Math.ceil(success / spell);
        let numOfPotions = m - search(potions, target);
        ans.push(numOfPotions);
    }
    return ans;
};
