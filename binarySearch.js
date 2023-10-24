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

//Search Insert Position

//https://leetcode.com/problems/search-insert-position/description/

//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
};

//Longest Subsequence With Limited Sum

//https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/

//You are given an integer array nums of length n, and an integer array queries of length m.
//Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].
//A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);
    let prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(prefix[prefix.length -1] + nums[i])
    }
    let ans = [];
    const search = (arr, target) => {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    
    for (let query of queries) {
        let idx = search(prefix, query);
        ans.push(idx)
    }
    return ans;
};

//Koko Eating Bananas

//https://leetcode.com/problems/koko-eating-bananas/description/

//Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
//Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
//Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
//Return the minimum integer k such that she can eat all the bananas within h hours.

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let min = 1;
    let max = Math.max(...piles);
    const checkTime = (k) => {
        let ans = 0;
        for (let bananas of piles) {
            ans += Math.ceil(bananas / k)
        }
        return ans <= h;
    }
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (checkTime(mid)) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return min;
};

//Path With Minimum Effort

//https://leetcode.com/problems/path-with-minimum-effort/description/

//You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.
//A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.
//Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const m = heights.length;
    const n = heights[0].length;
    const isValid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n;
    }
    
    const checkPath = (effort) => {
        const seen = [];
        for (let i = 0; i < m; i++) {
            seen.push(new Array(n).fill(false))
        }
        const dfs = () => {
            let stack = [[0, 0]];
            while (stack.length) {
                let [row, col] = stack.pop();

                if (row === m - 1 && col === n - 1) return true;

                for (let neighbor of directions) {
                let nextRow = neighbor[0] + row;
                let nextCol = neighbor[1] + col;
                    if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                        if (Math.abs(heights[nextRow][nextCol] - heights[row][col]) <= effort) {
                            seen[nextRow][nextCol] = true;
                            stack.push([nextRow, nextCol]);
                        }
                    }
                }
            }
            return false;
        }
        seen[0][0] = true;
        return dfs();
    }
    let min = 0;
    let maxEffort = -Infinity;
    let minEffort = Infinity;
    for (let arr of heights) {
        maxEffort = Math.max(maxEffort, Math.max(...arr));
        minEffort = Math.min(minEffort, Math.min(...arr));
    }
    let max = maxEffort - minEffort;
    
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (checkPath(mid)) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return min;
};

