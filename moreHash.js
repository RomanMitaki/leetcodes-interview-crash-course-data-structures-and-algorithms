//Ransom Note

//Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
//Each letter in magazine can only be used once in ransomNote.

//Input: ransomNote = "a", magazine = "b"
//Output: false

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
   const dic1 = new Map();
   const dic2 = new Map();
   for (let char of ransomNote) {
       dic1.set(char, (dic1.get(char) || 0) + 1);      
   }
   for (let char of magazine) {
       dic2.set(char, (dic2.get(char) || 0) + 1);      
   }
   for (let [key, val] of dic1) {
       if (!dic2.has(key) || dic2.get(key) < val) return false;
   }
   return true; 
};

//Jewels and Stones

//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
//Letters are case sensitive, so "a" is considered a different type of stone from "A".

//Input: jewels = "aA", stones = "aAAbbbb"
//Output: 3

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const dic = new Map();
    for (let stone of stones) {
        dic.set(stone, (dic.get(stone) || 0) + 1);
    }
    let ans = 0;
    for (let jewel of jewels) {
        ans += dic.get(jewel) || 0;
    }
    return ans;
};

//Longest Substring Without Repeating Characters

//Given a string s, find the length of the longest substring without repeating characters.

/*
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const dic = new Map();
    let ans = 0;
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        let char = s[end];
        dic.set(char, (dic.get(char) || 0) + 1);
        while (dic.get(char) > 1) {
            if (dic.get(s[start]) !== dic.get(char)) {
                dic.delete(s[start])
            } else {
                dic.set(char, 1)
            }
            start++;
        }
        ans = Math.max(ans, dic.size);
    }
    return ans;
};
