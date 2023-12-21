//Maximum Average Subarray I

//You are given an integer array nums consisting of n elements, and an integer k.
//Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

//Input: nums = [1,12,-5,-6,50,3], k = 4
//Output: 12.75000
//Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let currSum = 0;
    let ans = 0;
    for (let i = 0; i < k; i++) {
        currSum += nums[i];
    }
    let currAverage = currSum / k;
    ans = currAverage;
    for (let i = k; i < nums.length; i++) {
        currSum += nums[i] - nums[i - k];
        currAverage = currSum / k;
        ans = Math.max(ans, currAverage)
    }
    return ans;
};

//Max Consecutive Ones III

//Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

//Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
//Output: 6
//Explanation: [1,1,1,0,0,1,1,1,1,1,1]
//Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0, ans = 0, zeroes = 0;
    
    for (let curr = 0; curr < nums.length; curr++) {
        if (nums[curr] === 0) {
            zeroes++;
        }
        while (zeroes > k) {
            if (nums[left] === 0) {
                zeroes--;
            }
            left++;
        }
        ans = Math.max(ans, curr - left + 1);
    }
    return ans;
};

//Minimum Size Subarray Sum

//https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(prefix[prefix.length - 1] + nums[i])
    }

    let ans = Infinity;
    let left = 0;
    let right = 0;

    while (left < nums.length && right < nums.length) {
        if (nums[right] === target) return 1;
        let curr = prefix[right] - prefix[left] + nums[left];
        while (curr >= target) {
            ans = Math.min(ans, right - left + 1);
            left++;
            curr = prefix[right] - prefix[left] + nums[left];
        }
        right++;
    }
    return ans === Infinity ? 0 : ans;
};

//Maximum Number of Vowels in a Substring of Given Length
//https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let ans = 0;
  let curr = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (vowels.has(s[right])) curr++;
    if (right - left + 1 === k) {
      ans = Math.max(ans, curr);
      if (ans === k) return ans;
      if (vowels.has(s[left])) {
        curr--;
      }
      left++;
    }
  }
  return ans;

};

//Get Equal Substrings Within Budget
//https://leetcode.com/problems/get-equal-substrings-within-budget/

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    const len = s.length;
    let ans = 0;
    const countCost = (l1, l2) => {
        return Math.abs(l1.codePointAt(0) - l2.codePointAt(0));
    }
    let left = 0;
    let currCost = 0;
    let currLen = 0;

    for (let right = 0; right < len; right++) {
        currCost += countCost(s[right], t[right]);
        
        while (currCost > maxCost && left <= right) {
            currCost -= countCost(s[left], t[left]);
            left++;
            currLen--;
        }
        currLen = right - left + 1;
        ans = Math.max(ans, currLen)
    }
    
    return ans;
};
