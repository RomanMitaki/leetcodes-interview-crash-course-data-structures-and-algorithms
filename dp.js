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
