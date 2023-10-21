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

//Least Number of Unique Integers after K Removals

//https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/

//Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const nums = new Map();
    arr.forEach(num => nums.set(num, (nums.get(num) || 0) + 1));
    const numsValues = [];
    for (let val of nums.values()) {
        numsValues.push(val)
    }
    numsValues.sort((a, b) => b - a);
    while (k && numsValues.length) {
        let num = numsValues[numsValues.length - 1];
        if (num <= k) {
            k -= num;
            numsValues.pop();
        } else {
            break;
        }
    }
    return numsValues.length;
};

//Boats to Save People

//https://leetcode.com/problems/boats-to-save-people/

//You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
//Return the minimum number of boats to carry every given person.

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let ans = 0;
    people.sort((a, b) => a - b);
    let lightest = 0, heaviest = people.length - 1;
    while (lightest <= heaviest) {
        if (people[heaviest] + people[lightest] <= limit) {
            heaviest--;
            lightest++;
        } else {
            heaviest--;
        }
        ans++;
    }
    return ans;
};
