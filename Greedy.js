//Destroying Asteroids

//https://leetcode.com/problems/destroying-asteroids/

//You are given an integer mass, which represents the original mass of a planet. You are further given an integer array asteroids, where asteroids[i] is the mass of the ith asteroid.
//You can arrange for the planet to collide with the asteroids in any arbitrary order. If the mass of the planet is greater than or equal to the mass of the asteroid, the asteroid is destroyed and the planet gains the mass of the asteroid. Otherwise, the planet is destroyed.
//Return true if all asteroids can be destroyed. Otherwise, return false.

/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => b - a);
    while (asteroids.length) {
        let asteroid = asteroids.pop();
        if (asteroid > mass) return false;
        mass += asteroid;
    }
    return true;
};

//Partition Array Such That Maximum Difference Is K

//https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/

//You are given an integer array nums and an integer k. You may partition nums into one or more subsequences such that each element in nums appears in exactly one of the subsequences.
//Return the minimum number of subsequences needed such that the difference between the maximum and minimum values in each subsequence is at most k.
//A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let ans = 1;
    let currNum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - currNum > k) {
            ans++;
            currNum = nums[i];
        }
    }
    return ans;
};
