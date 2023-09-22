//Check if the Sentence Is Pangram

//A pangram is a sentence where every letter of the English alphabet appears at least once.
//Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

//Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
//Output: true
//Explanation: sentence contains at least one of every letter of the English alphabet.

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const set = new Set(sentence.split(''));
    return set.size === 26
    
};

//Missing Number

//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

//Input: nums = [3,0,1]
//Output: 2
//Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const map = new Map();
    for (let i = 0; i <= nums.length; i++) {
        map.set(i, false)
    }
    nums.forEach(num => {
        if (map.has(num)) map.set(num, true)
    });
    for (let [key, val] of map) {
        if (!val) return key;
    }
};

//Counting Elements

//Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

//Input: arr = [1,2,3]
//Output: 2
//Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const set = new Set(arr);
    let ans = 0;
    arr.forEach(el => {
        if (set.has(el + 1)) ans ++;
    });
    return ans;
};
