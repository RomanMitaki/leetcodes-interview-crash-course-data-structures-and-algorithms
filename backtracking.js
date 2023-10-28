//Permutations

//https://leetcode.com/problems/permutations/description/

//Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    const backtrack = (curr) => {
        if (curr.length === nums.length) {
            ans.push([...curr]);
            return
        }

        for (let num of nums) {
            if (!curr.includes(num)) {
                curr.push(num);
                backtrack(curr);
                curr.pop();
            }
        }
    }
    backtrack([]);
    return ans;
};
