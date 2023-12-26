//Find Players With Zero or One Losses
/*
You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

    answer[0] is a list of all players that have not lost any matches.
    answer[1] is a list of all players that have lost exactly one match.

The values in the two lists should be returned in increasing order.

Note:

    You should only consider the players that have played at least one match.
    The testcases will be generated such that no two matches will have the same outcome.
*/

/*
Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
*/

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const loosers = new Map();
    const winners = new Set();
    const ans = [[], []];
    let [a, b] = ans;
    matches.forEach(match => {
        loosers.set(match[1], (loosers.get(match[1]) || 0) + 1);
        winners.add(match[0]);
    });
    for (let [key, val] of loosers) {
        if (val === 1) b.push(key);
        if (winners.has(key)) winners.delete(key)
    }
    for (let val of winners) {
        a.push(val);
    }
    
    return ans.map(el => el.sort((a, b) => a - b));
};

//Largest Unique Number

//Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

//Input: nums = [5,7,3,9,4,9,8,3,1]
//Output: 8

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let ans = -1;
    const map = new Map();
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    });
    for (let [key, val] of map) {
        if (val === 1) {
            ans = Math.max(ans, key);
        }
    }
    return ans;
};

//Maximum Number of Balloons

//Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
//You can use each character in text at most once. Return the maximum number of instances that can be formed.

//Input: text = "loonbalxballpoon"
//Output: 2

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    if (text.length < 7) return 0;
    const map = new Map();
    let keyWord  = 'balloon';
    for (let char of keyWord) {
        map.set(char, 0)
    };
    for (let char of text) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        }
    }
    map.set('l', Math.floor(map.get('l')/2));
    map.set('o', Math.floor(map.get('o')/2));
    let ans = map.get('b');
    for (let [key, val] of map) {
        if (!val) return 0;
        ans = Math.min(ans, val);
    }
    return ans;
};

//Contiguous Array
//https://leetcode.com/problems/contiguous-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let ans = 0;
    const count = new Map();
    count.set(0, -1);
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
        curr += nums[i] ? 1 : -1;
        if (!count.has(curr)) {
            count.set(curr, i)
        } else {
            ans = Math.max(ans, i - count.get(curr))
        }
    }
    return ans;
};

