//Permutations

//https://leetcode.com/problems/permutations/description/

//Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    const backtrack = (curr) => {
        if (curr.length === nums.length) {
            ans.push([...curr]);
            return
        }

        for (let num of nums) {
            if (!curr.includes(num)) {
                curr.push(num);
                backtrack(curr);
                curr.pop();
            }
        }
    }
    backtrack([]);
    return ans;
};

//Subsets

//https://leetcode.com/problems/subsets/

//Given an integer array nums of unique elements, return all possible subsets (the power set).
//The solution set must not contain duplicate subsets. Return the solution in any order.\

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [];
    const backtrack = (curr, i) => {
        if (i > nums.length) {
            return
        }

        ans.push([...curr]);
        for (let j = i; j < nums.length; j++) {
            curr.push(nums[j]);
            backtrack(curr, j + 1)
            curr.pop();
        }
    }

    backtrack([], 0);
    return ans;
};

//Combinations

//https://leetcode.com/problems/combinations/description/

//Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
//You may return the answer in any order.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = [];
    const backtrack = (curr, i) => {
        if (curr.length === k) {
            ans.push([...curr]);
            return
        }

        for (let j = i; j <= n; j++) {
            curr.push(j);
            backtrack(curr, j + 1);
            curr.pop();
        }
    }

    backtrack([], 1);
    return ans;
};

 //All Paths From Source to Target

//https://leetcode.com/problems/all-paths-from-source-to-target/description/

//Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.
//The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const n = graph.length;
    const map = new Map();
    for (let edges = 0; edges < n; edges++) {
        map.set(edges, graph[edges])
    }
    
    const ans = [];
    const backtrack = (curr, node) => {
        curr.push(node);
        if (!map.get(node).length || node === n - 1) {
            if (curr[curr.length - 1] === n - 1) {
                ans.push([...curr]);
            }
            return;
        }
        
        for (let neighbor of map.get(node)) {
            backtrack(curr, neighbor);
            curr.pop();
        }
    }
    backtrack([], 0);
    return ans;
};
