//Simplify Path
/*
Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

The canonical path should have the following format:

    The path starts with a single slash '/'.
    Any two directories are separated by a single slash '/'.
    The path does not end with a trailing '/'.
    The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')

Return the simplified canonical path.
*/

/*
Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const dir = path.split('/');
    let ans = [];
    dir.forEach(el => {
        if ( el === '..') {
            ans.pop();
            
        } else if (el === '.' || el === '/' || !el) {
            el;
        } else {
            ans.push(el)
        }
    })
    return ans.length ? '/' + ans.join('/') : '/';
};

//Moving Average from Data Stream

//Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
//Implement the MovingAverage class:
//MovingAverage(int size) Initializes the object with the size of the window size.
//double next(int val) Returns the moving average of the last size values of the stream.

/*
Input
["MovingAverage", "next", "next", "next", "next"]
[[3], [1], [10], [3], [5]]
Output
[null, 1.0, 5.5, 4.66667, 6.0]

Explanation
MovingAverage movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3
*/

/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = []
    this.size = size
    this.ans = 0
    
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.queue.length >= this.size) {
        this.ans = this.ans - this.queue.shift();
    }
    this.queue.push(val);
    this.ans += val;
    return this.ans / this.queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

//Next Greater Element I

/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
*/

/*
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ans = [];
    const map = new Map();
    const stack = [];
    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i];
        while(stack.length && stack[stack.length-1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }
    
    while (stack.length) {
        map.set(stack.pop(), -1);
    }

    nums1.forEach(num => {
        ans.push(map.get(num));
    })

    return ans;
};

//Removing Stars From a String

/*
You are given a string s, which contains stars *.
In one operation, you can:
    Choose a star in s.
    Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.
Note:
    The input will be generated such that the operation is always possible.
    It can be shown that the resulting string will always be unique.
*/

/*
Example 1:

Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const deck = [];
    for (let char of s) {
        if(deck.length && char === '*') {
            deck.pop();
        } else {
            deck.push(char)
        }
    }
    return deck.join('');
};

//Sliding Window Maximum

//You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
//Return the max sliding window.
/*
Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const deque = [];
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        while (deque.length && nums[deque[deque.length-1]] <= nums[i]) {
            deque.pop();
        }
        deque.push(i);

        if (i - k === deque[0]) {
            deque.shift();
        }

        if (i >= k - 1) ans.push(nums[deque[0]]);
    }

    
    
    return ans; 
};
