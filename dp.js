//Min Cost Climbing Stairs

//https://leetcode.com/problems/min-cost-climbing-stairs/description/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = (i) => {
        if (i < 2) {
            return 0;
        }
        
        if (memo.has(i)) {
            return memo.get(i);
        }
        memo.set(i, Math.min(dp(i - 1) + cost[i-1], dp(i -2) + cost[i-2]))
        return memo.get(i);
    }
    let memo = new Map();
    return dp(cost.length);
};

//House Robber

//https://leetcode.com/problems/house-robber/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = (i) => {
        if (i === 1) {
            return nums[0]
        }
       
        let backTwo = nums[0];
        let backOne = Math.max(nums[0], nums[1]);

        for (let j = 2; j < i; j++) {
            let temp = backOne;
            backOne = Math.max(backOne, backTwo + nums[j]);
            backTwo = temp;
        }

        return backOne;
    }
    return dp(nums.length)
};

//Longest Increasing Subsequence
//https://leetcode.com/problems/longest-increasing-subsequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const ans = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                ans[i] = Math.max(ans[i], 1 + ans[j])
            }
        }
    }
    return Math.max(...ans)
};
