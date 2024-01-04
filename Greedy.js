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

//Maximum 69 Number

//https://leetcode.com/problems/maximum-69-number/description/

//You are given a positive integer num consisting only of digits 6 and 9.
//Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const arr = String(num).split('');
    let testSix = arr.indexOf('6');
    if (testSix !== -1) {
        arr[testSix] = '9';
    }
    return +arr.join('')
};

//Maximum Units on a Truck

//https://leetcode.com/problems/maximum-units-on-a-truck/description/

//You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
//numberOfBoxesi is the number of boxes of type i.
//numberOfUnitsPerBoxi is the number of units in each box of the type i.
//You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
//Return the maximum total number of units that can be put on the truck.

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let ans = 0;
    let currSize = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);
    for (let boxType of boxTypes) {
        let [qty, volume] = boxType;
        if (currSize === truckSize) break;
        while (qty) {
            qty--;
            ans += volume;
            currSize++;
            if (currSize === truckSize) break;
        }
    }
    return ans;
};

//How Many Apples Can You Put into the Basket

//https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/description/

//You have some apples and a basket that can carry up to 5000 units of weight.
//Given an integer array weight where weight[i] is the weight of the ith apple, return the maximum number of apples you can put in the basket.

/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    weight.sort((a, b) => b - a);
    let ans = 0;
    let currWeight = 0;
    while (true) {
        let apple = weight[weight.length - 1];
        if (currWeight + apple <= 5000) {
            ans ++;
            currWeight += weight.pop();
        } else {
            break;
        }
    }
    return ans;
};

//Reduce Array Size to The Half

//https://leetcode.com/problems/reduce-array-size-to-the-half/description/

//You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
//Return the minimum size of the set so that at least half of the integers of the array are removed.

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const counter = new Map();
    arr.forEach(num => counter.set(num, (counter.get(num) || 0) + 1));
    const counts = [];
    for (let val of counter.values()) {
        counts.push(val);
    }
    counts.sort((a, b) => a - b);
    let ans = 0;
    let currLen = 0;
    const limit = Math.round(arr.length / 2);
    while (counts.length) {
        let currVal = counts[counts.length - 1];
        if (currLen >= limit) {
            break;
        } else {
            currLen += counts.pop();
            ans++;
        }
    }
    return ans;
};

//Minimum Number of Operations to Make Array Empty
//https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const dic = new Map();
    nums.forEach(num => dic.set(num, (dic.get(num) || 0) + 1));
    if ([...dic.values()].some(el => el === 1)) return -1;
    let ans = 0;
    for (let qty of dic.values()) {
        let curr = qty;
        while (curr > 0) {
            if (curr < 3) {
                curr -= 2;
                ans++;                
            } else if (curr === 4) {
                curr -= 2;
                ans++;
            } else {
                curr -= 3;
                ans++;
            }
        }
    }
    return ans;
};
